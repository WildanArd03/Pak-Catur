import { Box, RadioGroup, VStack, Radio, Text, Image } from '@chakra-ui/react'
import { ReactText } from 'react'
import { Soal } from '~root/lib/types'

export type SoalComponentProps = {
  soal: Soal
  onRadioChange: (nextValue: ReactText) => void
}

export default function SoalComponent({
  soal: { daftarJawaban, pertanyaan, fotoTambahan },
  onRadioChange,
}: SoalComponentProps) {
  return (
    <Box key={pertanyaan}>
      <Text fontSize='lg' marginBottom={4}>
        {pertanyaan}
      </Text>

      {fotoTambahan && <Image src={fotoTambahan} marginBottom={4} />}

      <RadioGroup onChange={onRadioChange}>
        <VStack spacing={2} alignItems='start'>
          {daftarJawaban.map(({ jawaban, trueKah, fotoTambahan }) => (
            <Radio key={jawaban} value={`${trueKah}`}>
              {jawaban}
              {fotoTambahan && <Image src={fotoTambahan} marginBottom={4} />}
            </Radio>
          ))}
        </VStack>
      </RadioGroup>
    </Box>
  )
}
