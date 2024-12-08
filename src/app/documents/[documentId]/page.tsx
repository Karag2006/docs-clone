import { Editor } from "../(components)/editor";

interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      <Editor />
    </div>
  );
};

export default DocumentIdPage;
