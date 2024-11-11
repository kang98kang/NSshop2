import TwoColumnLayout from "@/components/layout/TwoColumnLayout";
import ImageWithCaption from "@/components/ui/ImageWithCaption";
import SectionTitle from "@/components/ui/SectionTitle";
import Paragraph from "@/components/ui/Paragraph";

interface InstructorProfileProps {
  image: string;
  name: string;
  title: string;
  education: string;
}

export default function InstructorProfile({
  image,
  name,
  title,
  education,
}: InstructorProfileProps) {
  return (
    <TwoColumnLayout
      leftWidth="31.25%"
      rightWidth="68.75%"
      leftContent={<ImageWithCaption src={image} width="2449px" />}
      rightContent={
        <>
          <SectionTitle level={2}>{name}</SectionTitle>
          <Paragraph>{title}</Paragraph>
          <Paragraph>{education}</Paragraph>
        </>
      }
    />
  );
}
