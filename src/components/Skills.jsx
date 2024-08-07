import React from "react";
import { Title, Badge, Group, Text } from "@mantine/core";

function Skills() {
  const skillCategories = {
    Languages: ["Java", "JavaScript", "HTML", "CSS", "SQL"],
    Technologies: [
      "React",
      "Spring Boot",
      "Spring",
      "Spring Data",
      "Spring Web/MVC",
      "REST API",
      "Hibernate",
      "Oracle",
      "Bitbucket",
      "Git",
      "Bamboo",
      "Jenkins",
      "Jira",
      "Confluence",
      "...",
    ],
    Principles: [
      "Agile Methodology",
      "TDD",
      "Waterfall Methodology",
      "Object-Oriented Programming",
      "SOLID Principles",
      "CI/CD",
      "Design Patterns",
      "...",
    ],
    Limited: [
      "C#",
      ".NET",
      "ASP.NET",
      "Python",
      "Django",
      "Flask",
      "Vue.js",
      "...",
    ],
  };

  return (
    <>
      <Title
        style={{
          color: "#248277",
          paddingBottom: "15px",
          fontFamily: "Space Mono",
        }}
        order={2}
      >
        Skills
      </Title>
      {Object.entries(skillCategories).map(([category, skills]) => (
        <div key={category} style={{ marginBottom: "20px" }}>
          <Text
            color="dimmed"
            weight={700}
            size="md"
            style={{ marginBottom: "10px" }}
          >
            {category}
          </Text>
          <Group spacing="xs" style={{ flexWrap: "wrap" }}>
            {skills.map((skill, index) => (
              <Badge
                key={index}
                color="#248277"
                size="md"
                style={{ margin: "1px" }}
              >
                {skill}
              </Badge>
            ))}
          </Group>
        </div>
      ))}
    </>
  );
}

export default Skills;
