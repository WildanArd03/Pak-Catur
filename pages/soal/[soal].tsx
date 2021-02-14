import {
  Box,
  Button,
  Container,
  Radio,
  RadioGroup,
  Text,
  VStack,
} from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { FormEvent, useState } from 'react'
import { practicesDir, practicesList } from '~root/lib/constants'
import { cleanFileName, getMarkdownData } from '~root/lib/functions'
import { MarkdownData, Soal } from '~root/lib/types'

type SoalParams = {
  soal: string
}

type SoalProps = {
  judul: string
  data: MarkdownData
}

const SoalSingle: NextPage<SoalProps> = ({
  judul,
  data: {
    metadata: { title, soal: daftarSoal },
  },
}) => {
  const [lembarJawaban, setLembarJawaban] = useState<boolean[]>([])

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
    alert(
      `Cuma bener ${lembarJawaban.reduce(
        (acc, cur) => (cur ? acc + 1 : acc),
        0
      )}`
    )
  }

  return (
    <Container maxWidth={['90%', '80%', '60%']} paddingY={8}>
      <VStack as='form' onSubmit={tunjukinNilai} spacing={8} alignItems='start'>
        {(daftarSoal as Soal[]).map(({ daftarJawaban, pertanyaan }, index) => {
          return (
            <Box key={pertanyaan}>
              <Text fontSize='lg' marginBottom={4}>
                {pertanyaan}
              </Text>
              <RadioGroup
                onChange={v =>
                  setLembarJawaban(lembarJawaban =>
                    setLembarJawabanNomor(index, v === 'true', lembarJawaban)
                  )
                }
              >
                <VStack spacing={2} alignItems='start'>
                  {daftarJawaban.map(({ jawaban, trueKah }) => (
                    <Radio key={jawaban} value={`${trueKah}`}>
                      {jawaban}
                    </Radio>
                  ))}
                </VStack>
              </RadioGroup>
            </Box>
          )
        })}

        <Button type='submit' colorScheme='green'>
          Selesai
        </Button>
      </VStack>
    </Container>
  )
}

export default SoalSingle

export const getStaticPaths: GetStaticPaths<SoalParams> = async () => {
  return {
    paths: practicesList.map(practice => ({
      params: {
        soal: cleanFileName(practice),
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
      judul: soal,
      data: data,
    },
  }
}
