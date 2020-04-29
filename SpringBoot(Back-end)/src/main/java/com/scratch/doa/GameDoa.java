package com.scratch.doa;

import com.scratch.model.Game;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;


import java.io.File;
import java.io.FileInputStream;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Base64;
import java.util.List;

@Component
public class GameDoa {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @CrossOrigin
    public List<Game> getAllGames() {
        String sql = "select * from Games;";
        RowMapper<Game> rowMapper = new GameRowMapper();
        return jdbcTemplate.query(sql, rowMapper);
    }

    private class GameRowMapper implements RowMapper<Game>{

        @Override
        public Game mapRow(ResultSet resultSet, int i) throws SQLException {
            int id = resultSet.getInt("id");
            String title = resultSet.getString("title");
            String short_desc = resultSet.getString("short_desc");

            Path currentP = Paths.get(".");
            String absPathStr = currentP.toAbsolutePath().toString();
            Path absP = Paths.get(absPathStr.substring(0,absPathStr.length()-1) + "src/main/" + resultSet.getString("image_path"));

            String image_url = absP.toString();

            String tmp = "";
            try{
                File file = new File(image_url);
                String ext = FilenameUtils.getExtension(file.getName());
                FileInputStream fis = new FileInputStream(file);
                byte[] bytes = new byte[(int) file.length()];
                fis.read(bytes);
                String encBase64 = Base64.getEncoder().encodeToString(bytes);
                tmp = "data:image/"+ext+";base64,"+encBase64;
                fis.close();
            }catch (Exception e) {
                e.printStackTrace();
            }
            ResponseEntity<String> image = new ResponseEntity<>(tmp, HttpStatus.OK);
            return new Game(id, title, short_desc, image);
        }
    }
}
