import Container from "@/commons/components/Container";
import TopicSuggestion from "./TopicSuggestion";
import TwitterMenfessForm from "./TwitterMenfessForm";

export default function TwitterMenfess({}) {
  return (
    <Container className="flex flex-col gap-10">
      <TwitterMenfessForm />
      {/* <TopicSuggestion></TopicSuggestion> */}
    </Container>
  );
}
