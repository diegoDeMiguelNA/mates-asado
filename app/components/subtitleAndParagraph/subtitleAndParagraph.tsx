type SubtitleAndParagraphProps = {
    subtitle?: string;
    paragraph: string;
  };
  
  const SubtitleAndParagraph: React.FC<SubtitleAndParagraphProps> = ({ subtitle, paragraph }) => {
    return (
      <div className="my-4">
        {subtitle && <h2 className="text-l sm:text-2xl font-heading uppercase m-10 mt-12">{subtitle}</h2>}
        <p className="px-6 text-left py-2 sm:px-24">{paragraph}</p>
      </div>
    );
  };
  
  export default SubtitleAndParagraph;
  