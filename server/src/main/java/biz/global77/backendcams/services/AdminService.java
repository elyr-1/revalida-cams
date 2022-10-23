package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.tables.pojos.Admin;
import java.util.List;

public interface AdminService {

    List<Admin> getAdminUsers();
    Admin getAdminById(Integer adminId);
    Admin insertAdmin(Admin admin);
    Admin updateAdmin(Integer adminId, Admin admin);
    void deleteAdminById(Integer adminId);

}
