import axios from "axios";

const EMPLOYEE_BASE_REST_API_URL = "http://localhost:8080/api/v1/employees";

// Services class to handle all the REST API calls
class EmployeeService {
    getAllEmployees() {
        return axios.get(EMPLOYEE_BASE_REST_API_URL);
    }

    createEmployee(employee: any) {
        return axios.post(EMPLOYEE_BASE_REST_API_URL, employee);
    }
}

export default new EmployeeService();