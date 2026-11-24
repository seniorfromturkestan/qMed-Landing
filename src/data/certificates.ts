// Сертификаты подхватываются автоматически из папки src/assets/certificates.
// Чтобы добавить новый: положите файл с номером в имени (например 053.png)
// и задеплойте. Он появится на /053 и в списке /certificates.
const files = import.meta.glob<string>('../assets/certificates/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
})

export interface Certificate {
  id: string
  src: string
}

export const certificates: Certificate[] = Object.entries(files)
  .map(([path, src]) => ({
    id: path.split('/').pop()!.replace(/\.[^.]+$/, ''),
    src,
  }))
  .filter((c) => /^\d+$/.test(c.id))
  .sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }))
