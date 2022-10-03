package biz.global77.backendcams.controllers;

import biz.global77.backendcams.services.AdminUserService;
import com.tej.JooQDemo.jooq.sample.model.tables.pojos.AdminUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/admin") /* API entry point */
public class AdminUserController {

    @Autowired
    private AdminUserService adminUserService;

    @GetMapping
    public List<AdminUser> getAdminUsers() {
        return adminUserService.getAdminUsers();
    }

    @GetMapping("/{adminId}")
    public AdminUser getAdminUser(@PathVariable(value = "adminId") Integer adminId) {
        return adminUserService.getAdminById(adminId);
    }

    @PostMapping("/add")
    public String addAdminUser(@RequestBody AdminUser admin) {
        adminUserService.insertAdminUser(admin);
        return "Admin user added successfully.";
    }

    @DeleteMapping("/delete/{adminId}")
    public String deleteAdminUser(@RequestBody @PathVariable(value = "adminId") Integer adminId) {
        adminUserService.deleteAdminUserById(adminId);
        return "Admin user deleted successfully.";
    }

    @PutMapping("/update/{adminId}")
    public String updateAdminUser(@PathVariable Integer adminId, @RequestBody AdminUser admin) {
        adminUserService.updateAdminUser(adminId, admin);
        return "Admin user details updated successfully.";
    }

}
