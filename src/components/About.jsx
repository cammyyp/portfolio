import React from "react";
import { Text } from "@mantine/core";
import { School, Location, Tex } from "tabler-icons-react";

function About() {
  return (
    <>
      <Text mb="md">
        A skilled
        <span style={{ color: "#248277" }}> Full Stack Software Engineer </span>
        with
        <span style={{ color: "#248277" }}>
          {" "}
          6+ years of professional experience{" "}
        </span>
        specialising in
        <span style={{ color: "#248277" }}> Spring</span>,
        <span style={{ color: "#248277" }}> Spring Boot</span>, and
        <span style={{ color: "#248277" }}> React</span>.
        <br />
        <br />
        My expertise lies in building scalable, high-performance applications
        that meet complex business needs.
        <br />
        <br />
        I am passionate about clean code, cloud-native solutions, and
        continuously improving the developer experience.
        <br />
        <br />
        With a strong foundation in both front-end and back-end development, I
        thrive on delivering end-to-end solutions that are robust, secure, and
        user-friendly.
      </Text>
      <br />
      <Text>
        <School size={17} /> BSc Software Development with Second Class Honours
      </Text>
      <Text style={{ paddingLeft: "28px", marginTop: "" }}>
        The University of Strathclyde, Glasgow
      </Text>
      <br />
      <Text>
        <Location size={15} /> Glasgow, Scotland
      </Text>
    </>
  );
}

export default About;
