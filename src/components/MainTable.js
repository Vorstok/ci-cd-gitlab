import React, {Component} from 'react';
import './css/Table.css'

class MainTable extends Component {

  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    const url = '/api/employee/find-all'

    fetch(url)
      .then(res => res.json())
      .then(res => this.setState({ users: res.data }))

  }

  deleteEmployee(id) {
    const url = `/api/employee/delete/${id}`

    fetch(url,  {
      method: 'DELETE'
    })
    this.setState({users: this.state.users.filter((row) => row.id !== id)})
  }

  render() {
    const { users } = this.state;

    return (
        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Имя</th>
                <th scope="col">Фамилия</th>
                <th scope="col">Отчество</th>
                <th scope="col">Дата начала работы</th>
                <th scope="col">Дата рождения</th>
                <th scope="col">Английский</th>
                <th scope="col">Образование</th>
                <th scope="col">Личная почта</th>
                <th scope="col">Корпоративная почта</th>
                <th scope="col">Телефон</th>
                <th scope="col">Телеграм</th>
                <th scope="col">Уволен</th>
                <th scope="col">Редактировать</th>
                <th scope="col">Удалить</th>
              </tr>
            </thead>
              <tbody>
                {
                  users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.patronymic}</td>
                      <td>{user.incomingDate}</td>
                      <td>{user.birthDate}</td>
                      <td>{user.english}</td>
                      <td>{user.education}</td>
                      <td>{user.personalEmail}</td>
                      <td>{user.corpEmail}</td>
                      <td>{user.phone}</td>
                      <td>{user.tg}</td>
                      <td><input type="checkbox" checked={user.isFired}/></td>
                      <td>
                        <a href={'/update/' + user.id} class="main-button">Редактировать</a>
                      </td>
                      <td>
                        <button onClick={() => this.deleteEmployee(user.id)} class="main-button">Удалить</button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
          </table>
          <div>
            <a href={'/create'} class="main-button">Добавить</a>
          </div>
        </div>
    )
  }
};

export default MainTable;