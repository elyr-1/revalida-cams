package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.tables.pojos.AdminUser;
import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import static com.tej.JooQDemo.jooq.sample.model.Tables.*;

/* CRUD functions for Admin */
@Service
public class AdminUserServiceImpl implements AdminUserService {

    /* DSL - Domain Specific Language; emulates SQL in Java */
    @Autowired
    private DSLContext dsl;

    /* add an admin
    * this method is not used in the frontend,
    * as the addition of admin users is implemented in the database only */
    @Override
    public AdminUser insertAdminUser(AdminUser admin) {
        dsl.insertInto(ADMIN_USER,
                ADMIN_USER.USERNAME,
                ADMIN_USER.FIRSTNAME,
                ADMIN_USER.LASTNAME,
                ADMIN_USER.GENDER,
                ADMIN_USER.ADDRESS,
                ADMIN_USER.ID)
        .values(
                admin.getUsername(),
                admin.getFirstname(),
                admin.getLastname(),
                admin.getGender(),
                admin.getAddress(),
                admin.getId())
        .execute();
        return admin;
    }

    /* get all admin users */
    @Override
    public List<AdminUser> getAdminUsers() {
        return dsl.select(
                ADMIN_USER.ADMIN_ID,
                ADMIN_USER.FIRSTNAME,
                ADMIN_USER.LASTNAME,
                ADMIN_USER.GENDER,
                ADMIN_USER.ADDRESS,
                ADMIN_USER.ID,
                USERS.USERNAME.as("username"))
                .from(ADMIN_USER)
                .innerJoin(USERS).on(USERS.ID.eq(ADMIN_USER.ID))
                .fetchInto(AdminUser.class);
    }

    /* get an admin by ID */
    @Override
    public AdminUser getAdminById(Integer adminId) {
        return dsl.selectFrom(ADMIN_USER)
                .where(ADMIN_USER.ADMIN_ID.eq(adminId))
                .fetchOneInto(AdminUser.class);
    }

    /* update admin detail(s) */
    @Override
    public AdminUser updateAdminUser(Integer adminId, AdminUser admin) {
        dsl.update(ADMIN_USER)
                .set(ADMIN_USER.USERNAME, admin.getUsername())
                .set(ADMIN_USER.FIRSTNAME, admin.getFirstname())
                .set(ADMIN_USER.LASTNAME,admin.getLastname())
                .set(ADMIN_USER.GENDER, admin.getGender())
                .set(ADMIN_USER.ADDRESS, admin.getAddress())
                .set(ADMIN_USER.ID, admin.getId())
                .where(ADMIN_USER.ADMIN_ID.eq(adminId))
                .execute();
        return admin;
    }

    /* delete an admin by ID */
    @Override
    public void deleteAdminUserById(Integer adminId) {
        dsl.deleteFrom(ADMIN_USER)
                .where(ADMIN_USER.ADMIN_ID.eq(adminId))
                .execute();
    }

}
