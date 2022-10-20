package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Users;
import java.util.List;

public interface UserService {

    List<Users> getUsers();
    Users getUserById(Integer userId);
    Users insertUser(Users user);
    Users updateUser(Integer userId, Users user);
    void deleteUserById(Integer userId);

}
