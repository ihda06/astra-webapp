import Container from "@/commons/components/Container";
import TwitterMenfessForm from "./TwitterMenfessForm";
import Direction from "./Direction";


export default function TwitterMenfess({}) {
  return (
    <Container className="flex flex-col gap-5 lg:w-[900px]">
      <TwitterMenfessForm />
      <Direction />
      {/* <TopicSuggestion></TopicSuggestion> */}
    </Container>
  );
}
