


"use client";

import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '@/app/components/Header';
import Breadcrumb from '@/app/components/breadcrum';
import TeacherForm from './TeacherForm';

const Page = () => {
  return (
    <Container fluid className="p-3 " >
      <Header text="Add New Teacher" background="bg-primary" />
      
      <div className="my-3">
        <Breadcrumb
          items={[
            { label: "Dashboard", path: "/dashboard" },
            { label: "Teachers", path: "/teachers" },
            { label: "Add New Teacher", path: "#" }
          ]}
        />
      </div>

      
      <TeacherForm />
      
    </Container>
  );
};

export default Page;

