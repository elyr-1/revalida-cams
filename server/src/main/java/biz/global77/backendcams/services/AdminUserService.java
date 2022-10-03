package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.Tables;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.AdminUser;
import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

/* CRUD functions for Admin */
@Service
public class AdminUserService {

    @Autowired
    private DSLContext dsl;

    /* add an admin */
    public void insertAdminUser(AdminUser admin) {
        dsl.insertInto(Tables.ADMIN_USER,
                Tables.ADMIN_USER.FIRSTNAME,
                Tables.ADMIN_USER.LASTNAME,
                Tables.ADMIN_USER.USERNAME,
                Tables.ADMIN_USER.PASSWORD,
                Tables.ADMIN_USER.TYPE)
        .values(
                admin.getFirstname(),
                admin.getLastname(),
                admin.getUsername(),
                admin.getPassword(),
                admin.getType())
        .execute();
    }

    /* get all admin users */
    public List<AdminUser> getAdminUsers() {
        return dsl.selectFrom(Tables.ADMIN_USER).fetchInto(AdminUser.class);
    }

    /* get an admin by ID */
    public AdminUser getAdminById(Integer adminId) {
        return dsl.selectFrom(Tables.ADMIN_USER)
                .where(Tables.ADMIN_USER.ADMIN_ID.eq(adminId))
                .fetchOneInto(AdminUser.class);
    }

    /* delete an admin by ID */
    public void deleteAdminUserById(Integer adminId) {
        dsl.deleteFrom(Tables.ADMIN_USER)
                .where(Tables.ADMIN_USER.ADMIN_ID.eq(adminId))
                .execute();
    }

    /* update admin detail(s) */
    public void updateAdminUser(Integer adminId, AdminUser admin) {
        dsl.update(Tables.ADMIN_USER)
                .set(Tables.ADMIN_USER.FIRSTNAME, admin.getFirstname())
                .set(Tables.ADMIN_USER.LASTNAME, admin.getLastname())
                .set(Tables.ADMIN_USER.USERNAME,admin.getUsername())
                .set(Tables.ADMIN_USER.TYPE, admin.getType())
                .where(Tables.ADMIN_USER.ADMIN_ID.eq(adminId))
                .execute();
    }

}
