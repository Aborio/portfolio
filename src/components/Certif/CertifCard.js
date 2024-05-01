import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { AiOutlineDownload } from "react-icons/ai";

const CertifCard = ({ imgPath, isBlog, title, description, ghLink, demoLink }) => {
  const handleDownload = () => {
    // Este es un ejemplo básico, necesitarás personalizarlo para que descargue la imagen correcta.
    // Puedes usar la librería FileSaver.js para esto.
    const link = document.createElement('a');
    link.href = imgPath;
    link.download = 'certificado.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} className="project-card-image" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {demoLink && (
          <Button variant="primary" href={demoLink} target="_blank">
            Demo
          </Button>
        )}
        <Button
            variant="primary"
            onClick={() => handleDownload()}
          >
            &nbsp;Download
          </Button>
      </Card.Body>
    </Card>
  );
};

export default CertifCard;