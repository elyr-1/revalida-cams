package biz.global77.backendcams.security;

import lombok.Data;

import java.util.List;

@Data
public class UserAuthenticationResponse {

//    private Long id;
    private String username;
    private String email;
    private List<String> roles;
}
