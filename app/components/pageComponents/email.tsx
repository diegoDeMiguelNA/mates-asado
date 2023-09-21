interface EmailProps {
  data: {
    fields: {
      emailAdress?: string;
    };
  };
}

function EmailComponent({ data }: EmailProps) {
  const email = data?.fields?.emailAdress;

  if (!email) return null;

  return (
    <div className="mt-4 mb-4">
      <a href={`mailto:${email}`} className="text-blue-500 underline">
        {email}
      </a>
    </div>
  );
}

export default EmailComponent;
