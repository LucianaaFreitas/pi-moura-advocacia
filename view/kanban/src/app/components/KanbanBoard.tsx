import { Column, ProcessCard } from "../types/kanban";
import { KanbanColumn } from "./KanbanColumn";

const columns: Column[] = [
	{
		id: "novos-casos",
		title: "Novos Casos",
	},
	{
		id: "em-andamento",
		title: "Em Andamento",
	},
	{
		id: "aguardando",
		title: "Aguardando",
	},
	{
		id: "concluidos",
		title: "Concluídos",
	},
];

interface KanbanBoardProps {
	processes: ProcessCard[];
	onEdit: (process: ProcessCard) => void;
	onDelete: (id: string) => void;
}

export function KanbanBoard({ processes, onEdit, onDelete }: KanbanBoardProps) {

	return (
		<section className="flex flex-col h-screen">
			<div className="flex-1 overflow-x-auto bg-gray-50">
				<div className="flex gap-4 p-6 h-full min-w-max">
					{columns.map((column) => (
						<KanbanColumn
							key={column.id}
							column={column}
							processes={processes.filter(
								(process) => process.status === column.id,
							)}
							onMoveCard={() => {}}
							onEditCard={onEdit}
							onDeleteCard={onDelete}
						/>
					))}
				</div>

				{/* Delete Confirmation Dialog */}
				{/* <DeleteConfirmDialog
          isOpen={deleteDialogOpen}
          onClose={() => setDeleteDialogOpen(false)}
          onConfirm={confirmDelete}
          processTitle={cardToDelete?.titulo || ""}
          processNumber={cardToDelete?.numeroProcesso || ""}
        /> */}
			</div>
		</section>
	);
}
