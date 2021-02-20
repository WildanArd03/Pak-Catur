import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Container,
  Heading,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { FormEvent, useRef, useState } from 'react'
import Navigation from '~root/components/Navigation'
import SoalComponent from '~root/components/SoalComponent'
import { practicesDir, practicesList } from '~root/lib/constants'
import { getMarkdownData } from '~root/lib/functions'
import { MarkdownData, Soal } from '~root/lib/types'

type SoalParams = {
  soal: string
}

type SoalProps = {
  data: MarkdownData
}

const SoalSingle: NextPage<SoalProps> = ({
  data: {
    metadata: { title, soal: daftarSoal },
  },
}) => {
  const [lembarJawaban, setLembarJawaban] = useState<boolean[]>([])
  const { isOpen, onOpen } = useDisclosure()
  const wtfIsThis = useRef()
  const router = useRouter()

  function setLembarJawabanNomor(
    nomor: number,
    value: boolean,
    lembarJawaban: boolean[]
  ) {
    const cloneLembarJawaban = [...lembarJawaban]
    cloneLembarJawaban[nomor] = value
    return cloneLembarJawaban
  }

  function tunjukinNilai(e: FormEvent<HTMLDivElement>) {
    e.preventDefault()
    onOpen()
  }

  return (
    <>
      <NextSeo title={title} />

      <Navigation backButton='/soal' />

      <Container maxWidth={['90%', '80%', '60%']} paddingY={8}>
        <Heading textAlign='center' marginTop={8}>
          {title}
        </Heading>
      </Container>

      <Container maxWidth={['90%', '80%', '60%']} paddingY={8}>
        <VStack
          as='form'
          onSubmit={tunjukinNilai}
          spacing={8}
          alignItems='start'
        >
          {(daftarSoal as Soal[]).map((soal, index) => {
            return (
              <SoalComponent
                key={soal.pertanyaan}
                soal={soal}
                onRadioChange={v =>
                  setLembarJawaban(lembarJawaban =>
                    setLembarJawabanNomor(
                      index,
                      v.toString().slice(0, -1) === 'true',
                      lembarJawaban
                    )
                  )
                }
              />
            )
          })}

          <Button type='submit' colorScheme='green'>
            Selesai
          </Button>
        </VStack>
      </Container>

      <AlertDialog
        leastDestructiveRef={wtfIsThis}
        isOpen={isOpen}
        onClose={() => router.replace('/soal')}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Hasil Latihan Soal</AlertDialogHeader>
          <AlertDialogBody>
            Selamat, nilai kamu{' '}
            {lembarJawaban.reduce((acc, cur) => (cur ? acc + 1 : acc), 0)}
          </AlertDialogBody>

          <AlertDialogFooter />
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default SoalSingle

export const getStaticPaths: GetStaticPaths<SoalParams> = async () => {
  return {
    paths: practicesList.map(({ name }) => ({
      params: {
        soal: name,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<SoalProps, SoalParams> = async ({
  params: { soal },
}) => {
  const data = getMarkdownData(practicesDir, soal)

  return {
    props: {
      data: data,
    },
  }
}
