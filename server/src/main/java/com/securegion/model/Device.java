package com.securegion.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Created by master on 02/06/2017.
 */
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Device {
    String name;
    String description;
}
