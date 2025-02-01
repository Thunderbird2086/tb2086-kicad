module.exports = {
  params: {
    designator: 'DISP',    // change it accordingly
    side: 'F',          // delete if not needed
    reversible: false,  // delete if not needed
    show_3d: false,     // delete if not needed
    MOSI: {type: 'net', value: 'MOSI'},
    SCK: {type: 'net', value: 'SCK'},
    VCC: {type: 'net', value: 'VCC'},
    GND: {type: 'net', value: 'GND'},
    CS: {type: 'net', value: 'CS'},
  },
  body: p => {
    const standard_opening = `(
         footprint "TB2086_MISC:Nice!View_rev"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "F.Cu")
        (descr "Nice!View ")
        (tags "CONN DEV")
        (property "Reference" "${p.ref}" (at -0.02 24.47 ${180 + p.rot}) (layer "${p.side}.SilkS") ${p.ref_hide} (effects (font (size 0.8128 0.8128) (thickness 0.15))))
        (attr through_hole)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (fp_line (start -6.355 18.73) (end -6.355 21.27) (stroke (width 0.15) (type solid)) (layer "F.SilkS") )
        (fp_line (start -6.355 21.27) (end 6.345 21.27) (stroke (width 0.15) (type solid)) (layer "F.SilkS") )
        (fp_line (start -5.33 22.353553) (end -4.83 22.353553) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -5.08 22) (end -5.33 22.353553) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start -4.83 22.353553) (end -5.08 22) (stroke (width 0.12) (type solid)) (layer "F.SilkS") )
        (fp_line (start 6.345 18.73) (end -6.355 18.73) (stroke (width 0.15) (type solid)) (layer "F.SilkS") )
        (fp_line (start 6.345 21.27) (end 6.345 18.73) (stroke (width 0.15) (type solid)) (layer "F.SilkS") )
        (fp_text user "GND" (at -2.54 16.27 ${0 + p.rot}) (unlocked yes) (layer "F.SilkS")  (effects (font (size 0.5 0.5) (thickness 0.125) (bold yes)) (justify bottom)))
        (fp_text user "VCC" (at 0 18.07 ${0 + p.rot}) (unlocked yes) (layer "F.SilkS")  (effects (font (size 0.5 0.5) (thickness 0.125) (bold yes)) (justify bottom)))
        (fp_text user "SCL" (at 2.54 16.27 ${0 + p.rot}) (unlocked yes) (layer "F.SilkS")  (effects (font (size 0.5 0.5) (thickness 0.125) (bold yes)) (justify bottom)))
        (fp_text user "CS" (at -5.08 16.27 ${0 + p.rot}) (unlocked yes) (layer "F.SilkS")  (effects (font (size 0.5 0.5) (thickness 0.125) (bold yes)) (justify bottom)))
        (fp_text user "SDA" (at 5.08 16.27 ${0 + p.rot}) (unlocked yes) (layer "F.SilkS")  (effects (font (size 0.5 0.5) (thickness 0.125) (bold yes)) (justify bottom)))
    `
    const front_pads = `
        (pad "" smd custom (at -5.11 18.9 ${180 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at -5.08 18.116 ${180 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at -2.57 18.9 ${180 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at -2.54 18.116 ${180 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at 2.51 18.9 ${180 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at 2.54 18.116 ${180 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at 5.05 18.9 ${180 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at 5.08 18.116 ${180 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "1" smd custom (at 5.08 17.1 ${180 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.MOSI})
        (pad "2" smd custom (at 2.54 17.1 ${180 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.SCK})
        (pad "4" smd custom (at -2.54 17.1 ${180 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.GND})
        (pad "5" smd custom (at -5.08 17.1 ${180 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.CS})
    `
    const front_fabrication = `
        (property "Value" "Nice!View_rev" (at 0.02 -13.4 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 0.8128 0.8128) (thickness 0.15))))
        (property "Footprint" "" (at 0 20 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at 0 20 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at 0 20 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_line (start -7.06 -16.17) (end -7.06 20.83) (stroke (width 0.15) (type solid)) (layer "F.Fab") )
        (fp_line (start -7.06 20.83) (end -7.06 -14.17) (stroke (width 0.15) (type solid)) (layer "F.Fab") )
        (fp_line (start -6.56 -16.67) (end 6.44 -16.67) (stroke (width 0.15) (type solid)) (layer "F.Fab") )
        (fp_line (start -6.56 -14.67) (end 6.44 -14.67) (stroke (width 0.15) (type solid)) (layer "F.Fab") )
        (fp_line (start 6.44 21.33) (end -6.56 21.33) (stroke (width 0.15) (type solid)) (layer "F.Fab") )
        (fp_line (start 6.94 -16.17) (end 6.94 20.83) (stroke (width 0.15) (type solid)) (layer "F.Fab") )
        (fp_line (start 6.94 20.83) (end 6.94 -14.17) (stroke (width 0.15) (type solid)) (layer "F.Fab") )
        (fp_arc (start -7.06 -16.17) (mid -6.913553 -16.523553) (end -6.56 -16.67) (stroke (width 0.15) (type solid)) (layer "F.Fab") )
        (fp_arc (start -7.06 -14.17) (mid -6.913553 -14.523553) (end -6.56 -14.67) (stroke (width 0.15) (type solid)) (layer "F.Fab") )
        (fp_arc (start -6.56 21.33) (mid -6.913553 21.183553) (end -7.06 20.83) (stroke (width 0.15) (type solid)) (layer "F.Fab") )
        (fp_arc (start 6.44 -16.67) (mid 6.793553 -16.523553) (end 6.94 -16.17) (stroke (width 0.15) (type solid)) (layer "F.Fab") )
        (fp_arc (start 6.44 -14.67) (mid 6.793553 -14.523553) (end 6.94 -14.17) (stroke (width 0.15) (type solid)) (layer "F.Fab") )
        (fp_arc (start 6.94 20.83) (mid 6.793553 21.183553) (end 6.44 21.33) (stroke (width 0.15) (type solid)) (layer "F.Fab") )
    `
    const front_mask = `
        (fp_rect (start -5.588 17.354) (end -4.572 18.37) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") )
        (fp_rect (start -3.048 17.354) (end -2.032 18.37) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") )
        (fp_rect (start 2.032 17.354) (end 3.048 18.37) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") )
        (fp_rect (start 4.572 17.354) (end 5.588 18.37) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") )
    `
    const front_courtyard = `
        (fp_line (start -6.88 18.23) (end 6.82 18.23) (stroke (width 0.15) (type solid)) (layer "F.CrtYd") )
        (fp_line (start -6.88 21.78) (end -6.88 18.23) (stroke (width 0.15) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 6.82 18.23) (end 6.82 21.78) (stroke (width 0.15) (type solid)) (layer "F.CrtYd") )
        (fp_line (start 6.82 21.78) (end -6.88 21.78) (stroke (width 0.15) (type solid)) (layer "F.CrtYd") )
    `
    const front_paste = `
    `
    const pads = `
        (pad "" thru_hole circle (at -5.08 20 ${p.rot}) (size 1.397 1.397) (drill 0.8128) (layers "*.Cu" "*.Mask" "F.SilkS") (remove_unused_layers no) )
        (pad "" thru_hole circle (at -2.54 20 ${p.rot}) (size 1.397 1.397) (drill 0.8128) (layers "*.Cu" "*.Mask" "F.SilkS") (remove_unused_layers no) )
        (pad "" thru_hole circle (at 2.54 20 ${p.rot}) (size 1.397 1.397) (drill 0.8128) (layers "*.Cu" "*.Mask" "F.SilkS") (remove_unused_layers no) )
        (pad "" thru_hole circle (at 5.08 20 ${p.rot}) (size 1.397 1.397) (drill 0.8128) (layers "*.Cu" "*.Mask" "F.SilkS") (remove_unused_layers no) )
        (pad "3" thru_hole circle (at 0 20 ${p.rot}) (size 1.397 1.397) (drill 0.8128) (layers "*.Cu" "*.Mask" "F.SilkS") (remove_unused_layers no)  ${p.VCC})
    `
    const back_silkscreen = `
        (fp_line (start -6.345 18.73) (end 6.355 18.73) (stroke (width 0.15) (type solid)) (layer "B.SilkS") )
        (fp_line (start -6.345 21.27) (end -6.345 18.73) (stroke (width 0.15) (type solid)) (layer "B.SilkS") )
        (fp_line (start 4.83 22.353553) (end 5.08 22) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 5.08 22) (end 5.33 22.353553) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 5.33 22.353553) (end 4.83 22.353553) (stroke (width 0.12) (type solid)) (layer "B.SilkS") )
        (fp_line (start 6.355 18.73) (end 6.355 21.27) (stroke (width 0.15) (type solid)) (layer "B.SilkS") )
        (fp_line (start 6.355 21.27) (end -6.345 21.27) (stroke (width 0.15) (type solid)) (layer "B.SilkS") )
        (fp_text user "GND" (at 2.54 16.27 ${0 + p.rot}) (unlocked yes) (layer "B.SilkS")  (effects (font (size 0.5 0.5) (thickness 0.125) (bold yes)) (justify bottom mirror)))
        (fp_text user "VCC" (at 0 18.07 ${0 + p.rot}) (unlocked yes) (layer "B.SilkS")  (effects (font (size 0.5 0.5) (thickness 0.125) (bold yes)) (justify bottom mirror)))
        (fp_text user "CS" (at 5.08 16.27 ${0 + p.rot}) (unlocked yes) (layer "B.SilkS")  (effects (font (size 0.5 0.5) (thickness 0.125) (bold yes)) (justify bottom mirror)))
        (fp_text user "SDA" (at -5.08 16.27 ${0 + p.rot}) (unlocked yes) (layer "B.SilkS")  (effects (font (size 0.5 0.5) (thickness 0.125) (bold yes)) (justify bottom mirror)))
        (fp_text user "SCL" (at -2.54 16.27 ${0 + p.rot}) (unlocked yes) (layer "B.SilkS")  (effects (font (size 0.5 0.5) (thickness 0.125) (bold yes)) (justify bottom mirror)))
    `
    const back_pads = `
        (pad "" smd custom (at -5.11 18.9 ${180 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at -5.08 18.116 ${180 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at -2.57 18.9 ${180 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at -2.54 18.116 ${180 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at 2.51 18.9 ${180 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at 2.54 18.116 ${180 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at 5.05 18.9 ${180 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at 5.08 18.116 ${180 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "1" smd custom (at -5.08 17.1 ${180 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.MOSI})
        (pad "2" smd custom (at -2.54 17.1 ${180 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.SCK})
        (pad "4" smd custom (at 2.54 17.1 ${180 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.GND})
        (pad "5" smd custom (at 5.08 17.1 ${180 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.CS})
    `
    const back_fabrication = `
        (fp_line (start -7.06 -16.17) (end -7.06 20.83) (stroke (width 0.15) (type solid)) (layer "B.Fab") )
        (fp_line (start -7.06 -14.17) (end -7.06 20.83) (stroke (width 0.15) (type solid)) (layer "B.Fab") )
        (fp_line (start -6.56 21.33) (end 6.44 21.33) (stroke (width 0.15) (type solid)) (layer "B.Fab") )
        (fp_line (start 6.44 -16.67) (end -6.56 -16.67) (stroke (width 0.15) (type solid)) (layer "B.Fab") )
        (fp_line (start 6.44 -14.67) (end -6.56 -14.67) (stroke (width 0.15) (type solid)) (layer "B.Fab") )
        (fp_line (start 6.94 -16.17) (end 6.94 20.83) (stroke (width 0.15) (type solid)) (layer "B.Fab") )
        (fp_line (start 6.94 -14.17) (end 6.94 20.83) (stroke (width 0.15) (type solid)) (layer "B.Fab") )
        (fp_arc (start -7.06 -16.17) (mid -6.913553 -16.523553) (end -6.56 -16.67) (stroke (width 0.15) (type solid)) (layer "B.Fab") )
        (fp_arc (start -7.06 -14.17) (mid -6.913553 -14.523553) (end -6.56 -14.67) (stroke (width 0.15) (type solid)) (layer "B.Fab") )
        (fp_arc (start -6.56 21.33) (mid -6.913553 21.183553) (end -7.06 20.83) (stroke (width 0.15) (type solid)) (layer "B.Fab") )
        (fp_arc (start 6.44 -16.67) (mid 6.793553 -16.523553) (end 6.94 -16.17) (stroke (width 0.15) (type solid)) (layer "B.Fab") )
        (fp_arc (start 6.44 -14.67) (mid 6.793553 -14.523553) (end 6.94 -14.17) (stroke (width 0.15) (type solid)) (layer "B.Fab") )
        (fp_arc (start 6.94 20.83) (mid 6.793553 21.183553) (end 6.44 21.33) (stroke (width 0.15) (type solid)) (layer "B.Fab") )
    `
    const back_mask = `
        (fp_rect (start -5.588 17.354) (end -4.572 18.37) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") )
        (fp_rect (start -3.048 17.354) (end -2.032 18.37) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") )
        (fp_rect (start 2.032 17.354) (end 3.048 18.37) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") )
        (fp_rect (start 4.572 17.354) (end 5.588 18.37) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") )
    `
    const back_courtyard = `
        (fp_line (start -6.88 18.23) (end 6.82 18.23) (stroke (width 0.15) (type solid)) (layer "B.CrtYd") )
        (fp_line (start -6.88 21.78) (end -6.88 18.23) (stroke (width 0.15) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 6.82 18.23) (end 6.82 21.78) (stroke (width 0.15) (type solid)) (layer "B.CrtYd") )
        (fp_line (start 6.82 21.78) (end -6.88 21.78) (stroke (width 0.15) (type solid)) (layer "B.CrtYd") )
    `
    const back_paste = `
    `
    const edge_cuts = `
    `
    const user_drawing = `
        (fp_line (start -5.46 16.73) (end -5.46 -8.57) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") )
        (fp_line (start -5.46 16.73) (end 5.34 16.73) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") )
        (fp_line (start 5.34 -8.57) (end -5.46 -8.57) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") )
        (fp_line (start 5.34 16.73) (end 5.34 -8.57) (stroke (width 0.15) (type solid)) (layer "Dwgs.User") )
    `
    const user_comments = `
        (fp_text user "OLED 128x32" (at -0.02 -15.72 ${0 + p.rot}) (unlocked yes) (layer "Cmts.User") (hide yes)  (effects (font (size 0.8128 0.8128) (thickness 0.2032) (bold yes))))
    `
    const user_eco1 = `
    `
    const user_eco2 = `
    `
    const model = `
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/PinSocket_2.54mm_5mm_1x-5.step" (offset (xyz -5.08 -20 0)) (scale (xyz 1 1 1)) (rotate (xyz -90 0 0)))
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/Nice_View.step" (offset (xyz -7.08 -21 7.1)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))
    `
    const standard_closing = `
            )
    `
    let final = standard_opening;
    final += front_silkscreen;
    final += front_pads;
    final += front_fabrication;
    final += front_mask;
    final += front_courtyard;
    final += front_paste;
    final += pads;
    final += back_silkscreen;
    final += back_pads;
    final += back_fabrication;
    final += back_mask;
    final += back_courtyard;
    final += back_paste;
    final += edge_cuts;
    final += user_drawing;
    final += user_comments;
    final += user_eco1;
    final += user_eco2;
    final += model;
    final += standard_closing;

    return final
  }
}
