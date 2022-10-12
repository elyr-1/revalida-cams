package biz.global77.backendcams.services;

import com.tej.JooQDemo.jooq.sample.model.tables.pojos.ProfessorLoad;
import java.util.List;

public interface ProfessorLoadService {

    List<ProfessorLoad> getProfessorLoads();
    ProfessorLoad getProfessorLoadById(Integer loadId);
    ProfessorLoad insertProfessorLoad(ProfessorLoad professorLoad);
    ProfessorLoad updateProfessorLoad(Integer loadId, ProfessorLoad professorLoad);
    void deleteProfessorLoadById(Integer loadId);

}
