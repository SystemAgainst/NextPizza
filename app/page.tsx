import { Container, Title } from "@/components/shared";

export default function Home() {
  return (
      <div className="flex justify-center items-center">
        <Container className="mt-10">
            <Title text="Все пиццы" size="lg" className="font-extrabold" />
        </Container>
      </div>
  );
}
