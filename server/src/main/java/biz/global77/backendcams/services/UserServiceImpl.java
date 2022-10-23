package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Users;
import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import static com.tej.JooQDemo.jooq.sample.model.Tables.*;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private DSLContext dsl;

    @Override
    public List<Users> getUsers() {
        return dsl.selectFrom(USERS).fetchInto(Users.class);
    }

    @Override
    public Users getUserById(Integer userId) {
        return dsl.selectFrom(USERS)
                .where(USERS.USER_ID.eq(userId))
                .fetchOneInto(Users.class);
    }

    @Override
    public Users insertUser(Users user) {
        dsl.insertInto(USERS,
                USERS.USERNAME,
                USERS.PASSWORD,
                USERS.ROLE_ID)
        .values(
                user.getUsername(),
                user.getPassword(),
                user.getRoleId())
        .execute();
        return user;
    }

    @Override
    public Users updateUser(Integer userId, Users user) {
        dsl.update(USERS)
            .set(USERS.USERNAME, user.getUsername())
            .set(USERS.PASSWORD, user.getPassword())
            .set(USERS.ROLE_ID, user.getRoleId())
            .where(USERS.USER_ID.eq(userId))
            .execute();
        return user;
    }

    @Override
    public void deleteUserById(Integer userId) {
        dsl.deleteFrom(USERS).where(USERS.USER_ID.eq(userId)).execute();
    }

}
