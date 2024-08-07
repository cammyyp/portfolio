import React from "react";
import { Title, Text, SimpleGrid, Badge, ActionIcon } from "@mantine/core";
import { ExternalLink } from "tabler-icons-react";

function Projects() {
  const projects = [
    {
      title: "MFA with AWS Cognito prototype",
      description:
        "A proof of concept developed to test possible solutions for a customer requirement of upgrading their applications login to use MFA. The end solution used spring interceptors + AWS SNS in order to send a OTP",
      skills: ["AWS", "AWS Cognito", "Javascript"],
      image: "/mfa-1.svg",
      githubUrl: "https://github.com/cammyyp/MFA-with-AWS-Cognito-Prototype",
    },
  ];

  return (
    <>
      <Title
        style={{
          color: "#248277",
          paddingBottom: "30px",
          fontFamily: "Space Mono",
        }}
        order={2}
      >
        Projects
      </Title>
      <SimpleGrid
        cols={1}
        spacing="lg"
        breakpoints={[{ maxWidth: "lg", cols: 1, spacing: "sm" }]}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Title order={3} style={{ fontFamily: "Space Mono" }}>
                {project.title}
              </Title>
              <ActionIcon
                color="none"
                variant="transparent"
                size="lg"
                className="icon-hover"
                component="a"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={20} />
              </ActionIcon>
            </div>
            <div
              style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}
            >
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                style={{
                  paddingTop: "5px",
                  width: "200px",
                  height: "auto",
                  borderRadius: "8px",
                }}
              />
              <div style={{ flex: 1 }}>
                <Text size="xs" color="dimmed" style={{ marginBottom: "15px" }}>
                  {project.description}
                </Text>
                <div>
                  {project.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      color="#248277"
                      size="sm"
                      style={{ marginRight: "10px", marginBottom: "10px" }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </SimpleGrid>
    </>
  );
}

export default Projects;
