import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'
import { Comprovante } from '@/model/comprovante'

export async function gerarPDF(comprovante: Comprovante | null) {
    if (!comprovante) return

    const pdfDoc = await PDFDocument.create()
    const page = pdfDoc.addPage([300, 450])
    const { width, height } = page.getSize()
    const fontSizeTitle = 18
    const fontSizeText = 12
    const margin = 40
    const textWidth = width - 2 * margin
    const lineHeight = fontSizeText * 1.5 
    
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
    page.setFont(font)

    page.drawText('Comprovante de Votação', {
        x: margin,
        y: height - margin,
        size: fontSizeTitle,
        color: rgb(0, 0, 0)
    })

    page.drawText('___________________________________', {
        x: margin - 10,
        y: height - margin - 20,
        size: fontSizeText,
        color: rgb(0.2, 0.2, 0.2)
    })

    const textColor = rgb(0.2, 0.2, 0.2)
    let currentY = height - margin - 60 

    const drawText = (label: string, value: string) => {
        page.drawText(label, {
            x: margin,
            y: currentY,
            size: fontSizeText,
            color: textColor,
        })

        const lines = wrapText(value, textWidth - 70, font, fontSizeText)
        lines.forEach((line, index) => {
            page.drawText(line, {
                x: margin + 70,  
                y: currentY - (index * lineHeight),
                size: fontSizeText,
                color: textColor
            })
        })

        currentY -= (lines.length * lineHeight) + 20
    }

    const wrapText = (text: string, maxWidth: number, font: any, fontSize: number) => {
        const lines = []
        let line = ''
        let currentLineWidth = 0

        for (let i = 0; i < text.length; i++) {
            const char = text[i]
            const charWidth = font.widthOfTextAtSize(char, fontSize)

            if (char === ' ') {
                if (currentLineWidth + charWidth > maxWidth && line.length > 0) {
                    lines.push(line.trim())
                    line = ''
                    currentLineWidth = 0
                }
                line += char
                currentLineWidth += charWidth
            } else {
                if (currentLineWidth + charWidth > maxWidth && line.length > 0) {
                    lines.push(line.trim())
                    line = ''
                    currentLineWidth = 0
                }
                line += char
                currentLineWidth += charWidth
            }
        }

        if (line) {
            lines.push(line.trim())
        }

        return lines
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