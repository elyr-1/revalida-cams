package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.Tables;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.AdminUser;
import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

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
        dsl.insertInto(Tables.ADMIN_USER,
                Tables.ADMIN_USER.FIRSTNAME,
                Tables.ADMIN_USER.MIDDLENAME,
                Tables.ADMIN_USER.LASTNAME,
                Tables.ADMIN_USER.GENDER,
                Tables.ADMIN_USER.ADDRESS,
                Tables.ADMIN_USER.ID)
        .values(
                admin.getFirstname(),
                admin.getMiddlename(),
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
        return dsl.selectFrom(Tables.ADMIN_USER)
                .orderBy(Tables.ADMIN_USER.LASTNAME.desc())
                .fetchInto(AdminUser.class);
    }

    /* get an admin by ID */
    @Override
    public AdminUser getAdminById(Integer adminId) {
        return dsl.selectFrom(Tables.ADMIN_USER)
                .where(Tables.ADMIN_USER.ADMIN_ID.eq(adminId))
                .fetchOneInto(AdminUser.class);
    }

    /* update admin detail(s) */
    @Override
    public AdminUser updateAdminUser(Integer adminId, AdminUser admin) {
        dsl.update(Tables.ADMIN_USER)
                .set(Tables.ADMIN_USER.FIRSTNAME, admin.getFirstname())
                .set(Tables.ADMIN_USER.MIDDLENAME, admin.getMiddlename())
                .set(Tables.ADMIN_USER.LASTNAME,admin.getLastname())
                .set(Tables.ADMIN_USER.GENDER, admin.getGender())
                .set(Tables.ADMIN_USER.ADDRESS, admin.getAddress())
                .set(Tables.ADMIN_USER.ID, admin.getId())
                .where(Tables.ADMIN_USER.ADMIN_ID.eq(adminId))
                .execute();
        return admin;
    }

    /* delete an admin by ID */
    @Override
    public void deleteAdminUserById(Integer adminId) {
        dsl.deleteFrom(Tables.ADMIN_USER)
                .where(Tables.ADMIN_USER.ADMIN_ID.eq(adminId))
                .execute();
    }

}
