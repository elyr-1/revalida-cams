package biz.global77.backendcams.interfaces;

import com.tej.JooQDemo.jooq.sample.model.tables.pojos.ProfessorLoad;
import java.util.List;

public interface ProfessorLoadInterface {

    List<ProfessorLoad> getProfessorLoads();
    ProfessorLoad getProfessorLoadById(Integer loadId);
    ProfessorLoad insertProfessorLoad(ProfessorLoad professorLoad);
    ProfessorLoad updateProfessorLoad(Integer loadId, ProfessorLoad professorLoad);
    void deleteProfessorLoadById(Integer loadId);

}
