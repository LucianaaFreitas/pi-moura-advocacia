import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { Label } from "./ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "./ui/select";
import { ProcessCard, Categoria, Prioridade, Instancia } from "../types/kanban";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface ProcessFormProps {
  initialData?: ProcessCard;
  onSubmit: (data: FormData) => void;
  buttonLabel?: string;
}

export type FormData = Omit<ProcessCard, "id">;

export default function ProcessForm({ initialData, onSubmit, buttonLabel }: ProcessFormProps) {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm<FormData>({
    defaultValues: initialData ? initialData : {
      titulo: '',
      numeroProcesso: '',
      cliente: '',
      prazo: '',
      comarca: '',
      categoria: 'Cível',
      prioridade: 'Média',
      instancia: '1º Grau',
      status: 'novos-casos'
    }
  });

  const categoria = watch("categoria");
  const prioridade = watch("prioridade");
  const instancia = watch("instancia");
  const status = watch("status");

  const handleClose = () => {
    reset();
    navigate("/");
  }

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="space-y-6 mt-4 w-6/12 mx-auto"
		>
			{/* Título do Processo */}
			<div className="space-y-2">
				<Label htmlFor="titulo">Ação / Assunto *</Label>
				<Input
					id="titulo"
					{...register("titulo", { required: "Campo obrigatório" })}
					placeholder="Ex: Ação de Indenização, Divórcio Consensual"
					className={errors.titulo ? "border-red-500" : ""}
				/>
				{errors.titulo && (
					<p className="text-sm text-red-600">
						{errors.titulo.message}
					</p>
				)}
			</div>

			{/* Número do Processo */}
			<div className="space-y-2">
				<Label htmlFor="numeroProcesso">Número do Processo *</Label>
				<Input
					id="numeroProcesso"
					{...register("numeroProcesso", {
						required: "Campo obrigatório",
					})}
					placeholder="0000000-00.0000.0.00.0000"
					className={errors.numeroProcesso ? "border-red-500" : ""}
				/>
				{errors.numeroProcesso && (
					<p className="text-sm text-red-600">
						{errors.numeroProcesso.message}
					</p>
				)}
			</div>

			{/* Cliente */}
			<div className="space-y-2">
				<Label htmlFor="cliente">Cliente *</Label>
				<Input
					id="cliente"
					{...register("cliente", { required: "Campo obrigatório" })}
					placeholder="Nome do cliente"
					className={errors.cliente ? "border-red-500" : ""}
				/>
				{errors.cliente && (
					<p className="text-sm text-red-600">
						{errors.cliente.message}
					</p>
				)}
			</div>

			{/* Prazo e Vara/Comarca */}
			<div className="grid grid-cols-2 gap-4">
				<div className="space-y-2">
					<Label htmlFor="prazo">
						Próximo Prazo / Data da Audiência *
					</Label>
					<Input
						id="prazo"
						type="date"
						{...register("prazo", {
							required: "Campo obrigatório",
						})}
						className={errors.prazo ? "border-red-500" : ""}
					/>
					{errors.prazo && (
						<p className="text-sm text-red-600">
							{errors.prazo.message}
						</p>
					)}
				</div>

				<div className="space-y-2">
					<Label htmlFor="comarca">Vara / Comarca *</Label>
					<Input
						id="comarca"
						{...register("comarca", {
							required: "Campo obrigatório",
						})}
						placeholder="Ex: 3ª Vara Cível"
						className={errors.comarca ? "border-red-500" : ""}
					/>
					{errors.comarca && (
						<p className="text-sm text-red-600">
							{errors.comarca.message}
						</p>
					)}
				</div>
			</div>

			{/* Tags - Área do Direito */}
			<div className="space-y-2">
				<Label>Área do Direito *</Label>
				<Select
					value={categoria}
					onValueChange={(value) =>
						setValue("categoria", value as Categoria)
					}
				>
					<SelectTrigger>
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="Cível">Cível</SelectItem>
						<SelectItem value="Penal">Penal</SelectItem>
						<SelectItem value="Trabalhista">Trabalhista</SelectItem>
						<SelectItem value="Tributário">Tributário</SelectItem>
						<SelectItem value="Família">Família</SelectItem>
					</SelectContent>
				</Select>
			</div>

			{/* Tags - Urgência */}
			<div className="space-y-2">
				<Label>Urgência / Prioridade *</Label>
				<Select
					value={prioridade}
					onValueChange={(value) =>
						setValue("prioridade", value as Prioridade)
					}
				>
					<SelectTrigger>
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="Alta">Alta</SelectItem>
						<SelectItem value="Média">Média</SelectItem>
						<SelectItem value="Prazo Hoje">Prazo Hoje</SelectItem>
						<SelectItem value="Liminar">Liminar</SelectItem>
					</SelectContent>
				</Select>
			</div>

			{/* Tags - Instância */}
			<div className="space-y-2">
				<Label>Instância *</Label>
				<Select
					value={instancia}
					onValueChange={(value) =>
						setValue("instancia", value as Instancia)
					}
				>
					<SelectTrigger>
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="1º Grau">1º Grau</SelectItem>
						<SelectItem value="2º Grau">2º Grau</SelectItem>
						<SelectItem value="STJ/STF">STJ/STF</SelectItem>
					</SelectContent>
				</Select>
			</div>

			{/* Status / Coluna */}
			<div className="space-y-2">
				<Label>Status do Processo *</Label>
				<Select
					value={status}
					onValueChange={(value) => setValue("status", value)}
				>
					<SelectTrigger>
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="novos-casos">
							Novos Casos / Análise Inicial
						</SelectItem>
						<SelectItem value="em-andamento">
							Em Andamento / Prazos Abertos
						</SelectItem>
						<SelectItem value="aguardando">
							Aguardando (Juízo / Audiência / Cliente)
						</SelectItem>
						<SelectItem value="concluidos">
							Concluídos / Arquivados
						</SelectItem>
					</SelectContent>
				</Select>
      </div>
      <div className="flex justify-end gap-3 pt-4 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
            >
              Cancelar
            </Button>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              {buttonLabel || "Salvar"}
            </Button>
        </div>
		</form>
	);
}
