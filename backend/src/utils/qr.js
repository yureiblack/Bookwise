import QRCode from 'qrcode'

export const generateQR = async (data) => {
    return QRCode.toDataURL(JSON.stringify(data))
} 