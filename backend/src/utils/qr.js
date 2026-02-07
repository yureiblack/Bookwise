import QRCode from 'qrcode'

export const generateQR = async (url) => {
    return QRCode.toDataURL(url)
} 