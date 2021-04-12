import React, { useState, useEffect, useRef, ChangeEvent } from 'react';

import { find_with_json } from '@api_manager';

import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import style from "./townHallRegistrationForm.module.css";

interface AuthType { logged_in_status: string }

const TownHallRegistrationForm: React.FC<AuthType> = ({ logged_in_status }) => {
  interface ResponseTownType {
    created_at: string,
    description: string | null,
    name: string,
    email: string | null,
    id: Uint8Array,
    insee_code: string,
    zip_code: string,
    updated_at: string
  }

  interface TownType {
    id: Uint8Array,
    zip_code: string,
    name: string,
    email: string | null,
    searchName: string
  }

  const [townsList, setTownsList] = useState<Array<TownType>>([]);
  const [selectedTown, setSelectedTown] = useState<TownType | null>(null);
  const [search, setSearch] = useState<string>("");
  const [showEmail, setShowEmail] = useState<boolean | undefined>(false);
  const [showButton, setShowButton] = useState<boolean | undefined>(false);

  const setTownsArray = (res: Array<ResponseTownType>) => {
    setTownsList([]);
    let newTownList: Array<TownType> = [];

    res.forEach( (town) => {
      const this_object = {
        id: town.id,
        zip_code: town.zip_code,
        name: town.name,
        email: town.email,
        searchName: `${town.zip_code} - ${town.name}`
      }
      newTownList.push(this_object);
    })

    setTownsList(newTownList)
  }

  const searchTowns = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);

    if (e.target.value.length >= 2) {
      find_with_json('/villages', true, { "keyword": e.target.value }, (res) => setTownsArray(res.data));
    } else {
      setTownsList([]);
    }

    setShowButton(false);
  }

  return (
  <Container fluid>
    <Row className='justify-content-center mt-5'>
      <Col lg='5'>
        <Form>
          <Form.Group>
            <Form.Control 
              type = 'text' placeholder = "Code postale - Nom de la commune"
              disabled = { showEmail }
              onChange = { searchTowns }
              value = { search }
            />

              { townsList.length > 0 && (
                <Container className = "autoContainer">
                  { townsList.map((town) => (
                    <Row
                      className = { style.autocomplete }
                      onClick = { () => {
                        setSelectedTown(town);
                        setSearch(town.searchName);
                        setTownsList([]);
                        setShowButton(true);
                      }}
                      key = { town.id.toString() }
                    >
                      { town.searchName }
                    </Row>
                  ))}
                </Container>
              )}
          </Form.Group>
        </Form>
      </Col>

      <Col lg='2'>
        <Button
          variant = 'primary'
          disabled = { !showButton }
          onClick = { () => setShowEmail(true)}
        >
          Valider
        </Button>
      </Col>
    </Row>

    <Row className='justify-content-center mt-5'>
      { showEmail && (
        <Col md='4'>
          <Row className='justify-content-left'>
           <p>Confirmez l'email : { selectedTown?.email } </p>
          </Row>
          <Row className='justify-content-left'>
            <Button variant = 'success'>Correct</Button>
            <Button variant = 'danger'>Incorrect</Button>
          </Row>
        </Col>
      )}
    </Row>
  </Container>
  )

};

export default TownHallRegistrationForm;