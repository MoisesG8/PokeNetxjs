import { Layout } from "@/components/layouts";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { GetStaticProps, NextPage } from "next";
import { pokeApi } from "@/api";
import { PokemonListResponse, SmallPokemon } from "@/interfaces";

interface PokemonListProps {
  pokemons: SmallPokemon[];
}

const Home: NextPage<PokemonListProps> = ({ pokemons }) => {
  //console.log(pokemons);

  const pokemonsList = pokemons.map(({ id, name, image }) => (
    <Grid xs={6} sm={3} md={2} xl={1} key={id}>
      <Card isHoverable isPressable>
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={image} alt={name} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="center">
            <Text> {name} </Text>
            <Text> #{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  ));

  return (
    <Layout titulo="Listado de Pokemons">
      <Grid.Container gap={2} justify="flex-start">
        {pokemonsList}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await pokeApi.get<PokemonListResponse>(
    "/pokemon?limit=149&offset=500"
  );

  //console.log(data);

  const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => {
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const url = pokemon.url;
    const id = parseInt(pokemon.url.split("/")[6]);
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
    return {
      name,
      url,
      id,
      image,
    };
  });

  return {
    props: {
      pokemons: pokemons,
    },
  };
};

export default Home;
