package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Admin;
import org.jooq.DSLContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import static com.tej.JooQDemo.jooq.sample.model.Tables.*;

/* CRUD functions for Admin */
@Service
public class AdminServiceImpl implements AdminService {

    /* DSL - Domain Specific Language; emulates SQL in Java */
    @Autowired
    private DSLContext dsl;

    /* add an admin */
    @Override
    public Admin insertAdmin(Admin admin) {
        dsl.insertInto(ADMIN,
                ADMIN.FIRSTNAME,
                ADMIN.LASTNAME,
                ADMIN.USERNAME,
                ADMIN.ADDRESS,
                ADMIN.USER_ID)
        .values(
                admin.getFirstname(),
                admin.getLastname(),
                admin.getUsername(),
                admin.getAddress(),
                admin.getUserId())
        .execute();
        return admin;
    }

    /* get all admin users */
    @Override
    public List<Admin> getAdminUsers() {
        return dsl.selectFrom(ADMIN)
                .fetchInto(Admin.class);
    }

    /* get an admin by ID */
    @Override
    public Admin getAdminById(Integer adminId) {
        return dsl.selectFrom(ADMIN)
                .where(ADMIN.ADMIN_ID.eq(adminId))
                .fetchOneInto(Admin.class);
    }

    /* update admin detail(s) */
    @Override
    public Admin updateAdmin(Integer adminId, Admin admin) {
        dsl.update(ADMIN)
                .set(ADMIN.FIRSTNAME, admin.getFirstname())
                .set(ADMIN.LASTNAME,admin.getLastname())
                .set(ADMIN.USERNAME, admin.getUsername())
                .set(ADMIN.ADDRESS, admin.getAddress())
                .set(ADMIN.USER_ID, admin.getUserId())
                .where(ADMIN.ADMIN_ID.eq(adminId))
                .execute();
        return admin;
    }

    /* delete an admin by ID */
    @Override
    public void deleteAdminById(Integer adminId) {
        dsl.deleteFrom(ADMIN)
                .where(ADMIN.ADMIN_ID.eq(adminId))
                .execute();
    }

}
