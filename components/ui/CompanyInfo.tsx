import SectionTitle from "@/components/ui/SectionTitle";
import Paragraph from "@/components/ui/Paragraph";
import HighlightText from "@/components/ui/HighlightText";
import styles from "@/styles/page.module.css";

interface CompanyInfoProps {
  name: string;
  email: string;
  address: string;
  phone: string;
}

export default function CompanyInfo({
  name,
  email,
  address,
  phone,
}: CompanyInfoProps) {
  return (
    <>
      <SectionTitle level={2}>
        📕<strong>교육문의</strong>
      </SectionTitle>
      <hr className={styles.hr} />
      <SectionTitle level={3}>
        <strong>{name}</strong>
      </SectionTitle>
      <Paragraph>
        <HighlightText color="gray">담당자 : {email}</HighlightText>
      </Paragraph>
      <Paragraph>
        <strong>🏠 {address}</strong>
      </Paragraph>
      <Paragraph>
        <strong>☎️ {phone}</strong>
      </Paragraph>
      <Paragraph>
        <strong>© MONSTERA. ALL RIGHTS RESERVED.</strong>
      </Paragraph>
    </>
  );
}
