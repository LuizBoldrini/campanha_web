import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'
import { Comprovante } from '@/model/comprovante'

export async function gerarPDF(comprovante: Comprovante | null) {
    if (!comprovante) return

    const pdfDoc = await PDFDocument.create()
    const page = pdfDoc.addPage([300,290])
    const { width, height } = page.getSize()
    const fontSizeTitle = 18
    const fontSizeText = 12

    const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
    page.setFont(font)

    page.drawText('Comprovante de Votação', {
        x: 40,
        y: height - 40,
        size: fontSizeTitle,
        color: rgb(0, 0, 0)
    })
    page.drawText('________________________________________________', {
        x: 1,
        y: height - 50,
        size: fontSizeText,
        color: rgb(0.2, 0.2, 0.2)
    })

    const textColor = rgb(0.2, 0.2, 0.2)
    let currentY = height - 80

    const drawText = (label: string, value: string) => {
        page.drawText(label, {
            x: 40,
            y: currentY,
            size: fontSizeText,
            color: textColor,
        })
        page.drawText(value, {
            x: 110,
            y: currentY,
            size: fontSizeText,
            color: textColor,
        })
        currentY -= 20
    }

    drawText('Nome:', comprovante.Comprovante[0]?.nome || '')
    drawText('Email:', comprovante.Comprovante[0]?.email || '')
    drawText('Matrícula:', comprovante.Comprovante[0]?.matricula || '')
    drawText('Eleição:', comprovante.Comprovante[0]?.eleicao || '')
    drawText('Chave:', comprovante.Comprovante[0]?.chave || '')
    drawText('Data:', comprovante.Comprovante[0]?.data?.toString() || '')
    drawText('Hora:', comprovante.Comprovante[0]?.hora?.toString() || '')

    const pdfBytes = await pdfDoc.save()
    const blob = new Blob([pdfBytes], { type: 'application/pdf' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'Comprovante de Votacao.pdf'
    link.click()
}