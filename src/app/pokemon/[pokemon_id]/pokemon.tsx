"use client";

import { Pokemon } from "@/model/pokemon";
import {
  Row,
  Col,
  Container,
  Image,
  Badge,
  Card,
  Button,
} from "react-bootstrap";
import Link from "next/link";

type Props = {
  pokemon: Pokemon;
};

export default function PokemonComponent({ pokemon }: Props) {
  return (
    <Container className="mt-4">
      <Card className="shadow p-4">
        <Row className="align-items-center">
          <Col xs={12} md={5}>
            <Image
              src={pokemon.mainImage}
              fluid
              rounded
              alt={pokemon.pokemonName}
              className="mb-4"
            />
          </Col>

          <Col xs={12} md={7}>
            <h1 className="mb-3">{pokemon.pokemonName}</h1>
            <ul className="list-unstyled fs-5">
              <li>
                <strong>Type:</strong>{" "}
                {pokemon.pokemonType.map((type, i) => (
                  <Badge bg={getTypeColor(type)} className="me-1" key={i}>
                    {type}
                  </Badge>
                ))}
              </li>
              <li>
                <strong>Attack:</strong> {pokemon.attack}
              </li>
              <li>
                <strong>Defense:</strong> {pokemon.defense}
              </li>
              <li>
                <strong>HP:</strong> {pokemon.healthPoints}
              </li>
              <li>
                <strong>Speed:</strong> {pokemon.speed}
              </li>
              <li>
                <strong>Evolution:</strong> {pokemon.evolution || "None"}
              </li>
            </ul>

            {pokemon.evolutionFamily.length > 1 && (
              <div className="mt-3">
                <h6>Evolution Chain:</h6>
                {pokemon.evolutionFamily.map((name, i) => (
                  <Badge key={i} bg="secondary" className="me-1">
                    {name}
                  </Badge>
                ))}
              </div>
            )}
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <Link href="/">
              <Button variant="outline-primary">← Back to Pokédex</Button>
            </Link>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

// Utility: Assign color to type
function getTypeColor(type: string): string {
  switch (type) {
    case "Water":
      return "primary";
    case "Fire":
      return "danger";
    case "Grass":
      return "success";
    case "Electric":
      return "warning";
    case "Poison":
      return "dark";
    case "Bug":
      return "success";
    case "Normal":
      return "secondary";
    default:
      return "info";
  }
}
