import React from "react";
import { Title, Text, Grid, Badge, Anchor, Box } from "@mantine/core";

function Experience() {
  const experiences = [
    {
      period: "2024 - Present",
      title: "Lead Software Engineer",
      company: "Leidos",
      companyLink: "https://www.leidos.com/",
      project: "NWS (Next Warning Service)",
      description:
        "As the lead software developer for the nationwide flood warning service NWS, I have played a crucial role in the project's success, set to serve hundreds of thousands of users. My key accomplishments include establishing the project structure, selecting libraries, developing custom GOV.UK components, setting up the Redux store, tackling the most challenging client issues, and setting up the CI/CD pipeline. I mentor junior team members, explain complex concepts, and foster a collaborative environment. I lead design discussions, conduct code reviews, and ensure best practices and coding standards are followed. Additionally, I have collaborated with external teams, including a User-Centered Design (UCD) team and the API development team, which has broadened my understanding of the project and allowed me to integrate diverse perspectives into our development process.",
      skills: [
        "Node.js",
        "Rest api",
        "React",
        "Redux",
        "Jest",
        "React Router",
        "AWS",
        "Selenium",
        "React Leaflet",
        "Elasticache",
        "Bitbucket",
        "Bamboo",
      ],
    },
    {
      period: "2021 - Present",
      title: "Lead Software Engineer",
      company: "Leidos",
      companyLink: "https://www.leidos.com/",
      project: "Hydrocarbon+",
      description:
        "Lead Software Developer for multiple legacy Java Spring applications, overseeing design and implementation of major upgrades. Built strong customer relationships, serving as the primary technical advisor to the project manager. Accomplishments, independently achieved, include migrating legacy tools to a new CI/CD environment, upgrading tech stacks for two Spring projects across multiple major versions and implementing a custom MFA solution leveraging AWS services.",
      skills: [
        "Java",
        "Spring",
        "Hibernate",
        "Oracle",
        "AWS",
        "JSP",
        "Maven",
        "Bitbucket",
        "Bamboo",
      ],
    },
    {
      period: "2020 - 2021",
      title: "Software Engineer",
      company: "Leidos",
      companyLink: "https://www.leidos.com/",
      project: "Various Cloud Projects",
      description:
        "Contributed to multiple cloud-based projects in a temporary role to gain hands-on experience with cloud services. Leveraged Infrastructure as Code (IaC) principles, utilizing technologies such as Terraform and Ansible. Acheieved AWS Developer certification",
      skills: ["AWS", "Azure", "Terraform", "Ansible"],
    },
    {
      period: "2018 - 2020",
      title: "Software Engineer",
      company: "Leidos",
      companyLink: "https://www.leidos.com/",
      project: "AiB (Account in Bankruptcy)",
      description:
        "As a Full Stack Developer, I helped design and implement a Vue.js debt case handling system with a ASP.NET backend for Accountant In Bankruptcy - which is now live and used by 1000s of users. Using SCRUM and Agile methods, we ensured timely delivery and adaptability while closely collaborating with the client to refine requirements and meet their needs.",
      skills: [
        "C#",
        "ASP.NET",
        "NUnit",
        "Vue",
        "SQL Management Studio",
        "MS Build",
        "Team city",
        "Git",
      ],
    },
  ];

  return (
    <Box>
      <Title
        style={{
          color: "#248277",
          paddingBottom: "30px",
          fontFamily: "Space Mono",
        }}
        order={2}
      >
        Experience
      </Title>
      {experiences.map((experience, index) => (
        <Grid key={index} gutter="md" style={{ marginBottom: "60px" }}>
          <Grid.Col span={4}>
            <Text
              color="dimmed"
              size="xs"
              style={{
                maxWidth: "100%",
                wordBreak: "break-word",
              }}
            >
              {experience.period}
            </Text>
          </Grid.Col>
          <Grid.Col span={8}>
            <Text weight={700} size="sm">
              {experience.title} -{" "}
              <Anchor
                href={experience.companyLink}
                target="_blank"
                style={{ color: "#248277" }}
              >
                {" "}
                {experience.company}
              </Anchor>
            </Text>
            <Text size="xs" style={{ marginTop: "15px" }}>
              {experience.project}
            </Text>
            <Text color="dimmed" size="xs" style={{ marginTop: "20px" }}>
              {experience.description}
            </Text>
            <Box style={{ marginTop: "20px" }}>
              {experience.skills.map((skill, skillIndex) => (
                <Badge
                  key={skillIndex}
                  color="#248277"
                  size="sm"
                  style={{
                    marginRight: "10px",
                    marginBottom: "10px",
                    display: "inline-block",
                  }}
                >
                  {skill}
                </Badge>
              ))}
            </Box>
          </Grid.Col>
        </Grid>
      ))}
    </Box>
  );
}

export default Experience;
