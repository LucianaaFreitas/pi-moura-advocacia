import Header from "../components/Header";
import ProcessForm from "../components/ProcessForm";

export default function NewProcess() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header title="Novo Processo" subtitle="Preencha os detalhes do processo" showActions={false} />
      <ProcessForm onSubmit={()=>{}}/>
    </main>
  )
}