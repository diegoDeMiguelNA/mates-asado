import React from "react";

interface EmailProps {
  data: {
    fields: {
      emailAdress?: string;
    };
  };
}

const EmailComponent: React.FC<EmailProps> = ({ data }) => {
  const email = data?.fields?.emailAdress;

  if (!email) return null;

  return (
    <div className="mt-4 mb-4">
      <a href={`mailto:${email}`} className="text-blue-500 underline">
        {email}
      </a>
    </div>
  );
};

export default EmailComponent;
