import { useEffect, useState } from "react";
import Header from "../components/Header";
import { KanbanBoard } from "../components/KanbanBoard";
import { ProcessCard } from "../types/kanban";
import { getProcesses } from "../../api/ProcessService";

export default function Home() {
	const [processes, setProcesses] = useState<ProcessCard[]>([]);

	async function fetchProcesses() {
		try {
			const data = await getProcesses();
			setProcesses(data);
		} catch (error) {
			console.error("Erro ao buscar processos:", error);
		}
	}

	useEffect(() => {
		fetchProcesses();
	}, []);

	return (
		<main className="min-h-screen bg-gray-50">
			<Header title="Kanban Jurídico" subtitle="Gestão de Processos e Casos" />
			<KanbanBoard processes={processes} />
		</main>
	);
}
