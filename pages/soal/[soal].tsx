import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Container,
  Heading,
  Image,
  Radio,
  RadioGroup,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { FormEvent, useRef, useState } from 'react'
import Navigation from '~root/components/Navigation'
import { practicesDir, practicesList } from '~root/lib/constants'
import { getMarkdownData } from '~root/lib/functions'
import { MarkdownData, Soal } from '~root/lib/types'
import { useRouter } from 'next/router'

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
          {(daftarSoal as Soal[]).map(
            ({ daftarJawaban, pertanyaan, fotoTambahan }, index) => {
              return (
                <Box key={pertanyaan}>
                  <Text fontSize='lg' marginBottom={4}>
                    {pertanyaan}
                  </Text>

                  {fotoTambahan && (
                    <Image src={fotoTambahan} marginBottom={4} />
                  )}

                  <RadioGroup
                    onChange={v =>
                      setLembarJawaban(lembarJawaban =>
                        setLembarJawabanNomor(
                          index,
                          v === 'true',
                          lembarJawaban
                        )
                      )
                    }
                  >
                    <VStack spacing={2} alignItems='start'>
                      {daftarJawaban.map(
                        ({ jawaban, trueKah, fotoTambahan }) => (
                          <Radio key={jawaban} value={`${trueKah}`}>
                            {jawaban}
                            {fotoTambahan && (
                              <Image src={fotoTambahan} marginBottom={4} />
                            )}
                          </Radio>
                        )
                      )}
                    </VStack>
                  </RadioGroup>
                </Box>
              )
            }
          )}

          <Button type='submit' colorScheme='green'>
            Selesai
          </Button>
        </VStack>
      </Container>

      <Container maxWidth='90%'>
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
      </Container>
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
