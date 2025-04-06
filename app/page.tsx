import {
    TopBar,
    Container,
    Title,
    Filters,
    ProductCard,
} from "@/components/shared";

export default function Home() {
  return (
      <>
        <Container className="mt-10">
            <Title text="Все пиццы" size="lg" className="font-extrabold" />
        </Container>
        <TopBar />

        <Container className="mt-10 pb-14">
            <div className="flex gap-[60px]">
                <div className="w-[250px]">
                    <Filters />
                </div>

                <div className="flex-1">
                    <div className="flex flex-col gap-16">
                        <ProductCard
                            name="Чизбургер-пицца"
                            price={550}
                            imageUrl="https://media.dodostatic.net/image/r:584x584/0194d4fd39bb7352bfa5de2219e88b9b.avif"
                        />
                    </div>
                </div>
            </div>
        </Container>
      </>
  );
}
