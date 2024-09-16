export class CreateTabUploadDto {
  id: number;
  name: string;
  description: string;
  pdfPath: string; // Campo para armazenar o caminho do arquivo PDF
  tipoArquivo: string;
}