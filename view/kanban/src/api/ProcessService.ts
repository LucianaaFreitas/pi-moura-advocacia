import axios from "axios";
import { ProcessCard } from "../app/types/kanban";

const api = axios.create({
	baseURL: "http://localhost:3000",
});

function normalizeProcesses(payload: unknown): ProcessCard[] {
	if (Array.isArray(payload)) {
		return payload as ProcessCard[];
	}

	if (payload && typeof payload === "object") {
		const objectPayload = payload as Record<string, unknown>;

		if (Array.isArray(objectPayload.processes)) {
			return objectPayload.processes as ProcessCard[];
		}

		if (Array.isArray(objectPayload.data)) {
			return objectPayload.data as ProcessCard[];
		}

		if (Array.isArray(objectPayload.content)) {
			return objectPayload.content as ProcessCard[];
		}
	}

	return [];
}

export async function getProcesses(): Promise<ProcessCard[]> {
	const response = await api.get("/processes");
	return response.data;
}
