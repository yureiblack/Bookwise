import QRCode from 'qrcode'

export const generateQR = async (payload) => {
    return QRCode.toDataURL(JSON.stringify(data))
} 