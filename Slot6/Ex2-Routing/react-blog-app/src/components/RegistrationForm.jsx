import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = 'Vui lòng nhập username';
    
    if (!formData.email) {
      newErrors.email = 'Vui lòng nhập email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email không đúng định dạng';
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!formData.password) {
      newErrors.password = 'Vui lòng nhập password';
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Password phải từ 6 kí tự, có hoa, thường, số, kí tự đặc biệt';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Vui lòng xác nhận password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Mật khẩu xác nhận không khớp';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Đăng ký thành công, điều hướng sang trang chủ (blog home)
      navigate('/');
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <Container className="mt-5 mb-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-sm" style={{ borderRadius: '15px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <Card.Body className="p-5">
              <h3 className="text-center mb-4 fw-bold text-primary">Đăng ký tài khoản</h3>
              <Form onSubmit={handleSubmit} noValidate>
                <Form.Group className="mb-3" controlId="formUsername">
                  <Form.Label className="fw-semibold">Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    isInvalid={!!errors.username}
                    placeholder="Nhập username"
                    className="p-3 bg-light border-0"
                    style={{ borderRadius: '10px' }}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label className="fw-semibold">Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    placeholder="Nhập email"
                    className="p-3 bg-light border-0"
                    style={{ borderRadius: '10px' }}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label className="fw-semibold">Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    isInvalid={!!errors.password}
                    placeholder="Nhập password"
                    className="p-3 bg-light border-0"
                    style={{ borderRadius: '10px' }}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formConfirmPassword">
                  <Form.Label className="fw-semibold">Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    isInvalid={!!errors.confirmPassword}
                    placeholder="Xác nhận password"
                    className="p-3 bg-light border-0"
                    style={{ borderRadius: '10px' }}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.confirmPassword}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className="d-grid gap-3">
                  <Button variant="primary" type="submit" className="p-3 fw-bold" style={{ borderRadius: '10px' }}>
                    Đăng ký ngay
                  </Button>
                  <Button variant="outline-secondary" type="button" onClick={handleCancel} className="p-3 fw-bold" style={{ borderRadius: '10px' }}>
                    Hủy bỏ
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationForm;
