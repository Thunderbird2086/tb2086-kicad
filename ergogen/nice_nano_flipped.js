module.exports = {
  params: {
    designator: 'MCU',    // change it accordingly
    side: 'F',          // delete if not needed
    reversible: false,  // delete if not needed
    show_3d: false,     // delete if not needed
    P18: {type: 'net', value: 'P18'},
    P15: {type: 'net', value: 'P15'},
    P01: {type: 'net', value: 'P01'},
    P02: {type: 'net', value: 'P02'},
    P14: {type: 'net', value: 'P14'},
    P00: {type: 'net', value: 'P00'},
    RAW: {type: 'net', value: 'RAW'},
    GND: {type: 'net', value: 'GND'},
    P03: {type: 'net', value: 'P03'},
    P10: {type: 'net', value: 'P10'},
    P05: {type: 'net', value: 'P05'},
    P07: {type: 'net', value: 'P07'},
    VCC: {type: 'net', value: 'VCC'},
    P21: {type: 'net', value: 'P21'},
    P20: {type: 'net', value: 'P20'},
    P19: {type: 'net', value: 'P19'},
    P04: {type: 'net', value: 'P04'},
    RST: {type: 'net', value: 'RST'},
    P09: {type: 'net', value: 'P09'},
    P06: {type: 'net', value: 'P06'},
  },
  body: p => {
    const standard_opening = `(
         footprint "TP2086_MCU:ProMicro-dn-mirror-rev-unrouted"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "${p.side}.Cu")
        (descr "Solder-jumper reversible Pro Micro footprint (unrouted)")
        (tags "promicro ProMicro reversible solder jumper")
        (property "Reference" "${p.ref}" (at 0.254 -14.986 ${0 + p.rot}) (layer "${p.side}.SilkS") ${p.ref_hide} (effects (font (size 1 1) (thickness 0.15))))
        (attr through_hole)
        ${p.at /* parametric position */}
    `
    const front_silkscreen = `
        (fp_line (start -7.62 -15.01) (end -7.62 15.07) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_line (start -6.12 16.51) (end 6.12 16.51) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_line (start 6.12 -16.51) (end -6.12 -16.51) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_line (start 7.62 15.07) (end 7.62 -15.01) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_arc (start -7.62 -15.01) (mid -7.18066 -16.07066) (end -6.12 -16.51) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_arc (start -6.12 16.51) (mid -7.18066 16.07066) (end -7.62 15.01) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_arc (start 6.12 -16.51) (mid 7.18066 -16.07066) (end 7.62 -15.01) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_arc (start 7.62 15.01) (mid 7.18066 16.07066) (end 6.12 16.51) (stroke (width 0.15) (type default)) (layer "F.SilkS") )
        (fp_text user "GND" (at -2.5389 -7.5445 ${0 + p.rot}) (layer "F.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "SCL" (at -2.6024 0.012 ${0 + p.rot}) (layer "F.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "COL0" (at 2.3631 -2.51 ${0 + p.rot}) (layer "F.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "ROW2" (at -2.3524 7.64 ${0 + p.rot}) (layer "F.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "SDA" (at -2.6024 -2.528 ${0 + p.rot}) (layer "F.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "RST" (at 2.5476 -7.5445 ${0 + p.rot}) (layer "F.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "ROW3" (at -2.3524 10.2355 ${0 + p.rot}) (layer "F.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "LED" (at -2.5634 -12.688 ${0 + p.rot}) (layer "F.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "DATA" (at -2.4524 -10.16 ${0 + p.rot}) (layer "F.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "ROW1" (at -2.3024 5.092 ${0 + p.rot}) (layer "F.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "GND" (at 2.5476 -10.148 ${0 + p.rot}) (layer "F.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "GND" (at -2.6024 -5.0045 ${0 + p.rot}) (layer "F.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "CS" (at -6.0198 15.3155 ${0 + p.rot}) (layer "F.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "COL1" (at 2.4131 0.012 ${0 + p.rot}) (layer "F.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "ROW0" (at -2.3524 2.59 ${0 + p.rot}) (layer "F.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "COL2" (at 2.3631 2.552 ${0 + p.rot}) (layer "F.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "COL3" (at 2.2631 5.14 ${0 + p.rot}) (layer "F.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "RAW" (at 2.5476 -12.688 ${0 + p.rot}) (layer "F.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "COL4" (at 2.3131 7.64 ${0 + p.rot}) (layer "F.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "COL5" (at 2.3131 10.2355 ${0 + p.rot}) (layer "F.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "VCC" (at 2.5476 -5.068 ${0 + p.rot}) (layer "F.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125))))
    `
    const front_pads = `
        (pad "" smd custom (at -7.5946 16.7092 ${p.rot}) (size 0.25 1.5) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at -7.5946 17.2672 ${p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at -6.35 -12.7 ${90 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at -6.35 -10.16 ${90 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at -6.35 -7.62 ${90 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at -6.35 -5.08 ${90 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at -6.35 -2.54 ${90 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at -6.35 0 ${90 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at -6.35 2.54 ${90 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at -6.35 5.08 ${90 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at -6.35 7.62 ${90 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at -6.35 10.16 ${90 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at -5.842 -12.7 ${90 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at -5.842 -10.16 ${90 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at -5.842 -7.62 ${90 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at -5.842 -5.08 ${90 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at -5.842 -2.54 ${90 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at -5.842 0 ${90 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at -5.842 2.54 ${90 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at -5.842 5.08 ${90 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at -5.842 7.62 ${90 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at -5.842 10.16 ${90 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at 5.842 -12.7 ${270 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at 5.842 -10.16 ${270 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at 5.842 -7.62 ${270 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at 5.842 -5.08 ${270 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at 5.842 -2.54 ${270 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at 5.842 0 ${270 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at 5.842 2.54 ${270 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at 5.842 5.08 ${270 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at 5.842 7.62 ${270 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at 5.842 10.16 ${270 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at 6.35 -12.7 ${270 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at 6.35 -10.16 ${270 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at 6.35 -7.62 ${270 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at 6.35 -5.08 ${270 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at 6.35 -2.54 ${270 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at 6.35 0 ${270 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at 6.35 2.54 ${270 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at 6.35 5.08 ${270 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at 6.35 7.62 ${270 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at 6.35 10.16 ${270 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at 7.62 16.7092 ${p.rot}) (size 0.25 1.5) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at 7.62 17.2672 ${p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "GND" smd custom (at -4.826 -7.62 ${90 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.GND})
        (pad "GND" smd custom (at -4.826 -5.08 ${90 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.GND})
        (pad "GND" smd custom (at 4.826 -10.16 ${270 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.GND})
        (pad "P00" smd custom (at -4.826 -10.16 ${90 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.P00})
        (pad "P01" smd custom (at -4.826 -12.7 ${90 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.P01})
        (pad "P02" smd custom (at -4.826 -2.54 ${90 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.P02})
        (pad "P03" smd custom (at -4.826 0 ${90 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.P03})
        (pad "P04" smd custom (at -4.826 2.54 ${90 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.P04})
        (pad "P05" smd custom (at -4.826 5.08 ${90 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.P05})
        (pad "P06" smd custom (at -4.826 7.62 ${90 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.P06})
        (pad "P07" smd custom (at -4.826 10.16 ${90 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.P07})
        (pad "P09" smd custom (at -7.5946 18.2832 ${p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.P09})
        (pad "P10" smd custom (at 7.62 18.2832 ${p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.P10})
        (pad "P14" smd custom (at 4.826 10.16 ${270 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.P14})
        (pad "P15" smd custom (at 4.826 7.62 ${270 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.P15})
        (pad "P18" smd custom (at 4.826 5.08 ${270 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.P18})
        (pad "P19" smd custom (at 4.826 2.54 ${270 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.P19})
        (pad "P20" smd custom (at 4.826 0 ${270 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.P20})
        (pad "P21" smd custom (at 4.826 -2.54 ${270 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.P21})
        (pad "RAW" smd custom (at 4.826 -12.7 ${270 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.RAW})
        (pad "RST" smd custom (at 4.826 -7.62 ${270 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.RST})
        (pad "VCC" smd custom (at 4.826 -5.08 ${270 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.VCC})
    `
    const front_fabrication = `
        (property "Value" "ProMicro" (at 0 17.78 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1 1) (thickness 0.15))))
        (property "Footprint" "" (at -7.62 -12.7 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at -7.62 -12.7 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at -7.62 -12.7 ${0 + p.rot}) (layer "F.Fab") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15))))
    `
    const front_mask = `
        (fp_poly (pts (xy -7.0866 18.0292) (xy -8.1026 18.0292) (xy -8.1026 17.0132) (xy -7.0866 17.0132)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") )
        (fp_poly (pts (xy -5.08 -13.208) (xy -5.08 -12.192) (xy -6.096 -12.192) (xy -6.096 -13.208)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") )
        (fp_poly (pts (xy -5.08 -10.668) (xy -5.08 -9.652) (xy -6.096 -9.652) (xy -6.096 -10.668)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") )
        (fp_poly (pts (xy -5.08 -8.128) (xy -5.08 -7.112) (xy -6.096 -7.112) (xy -6.096 -8.128)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") )
        (fp_poly (pts (xy -5.08 -5.588) (xy -5.08 -4.572) (xy -6.096 -4.572) (xy -6.096 -5.588)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") )
        (fp_poly (pts (xy -5.08 -3.048) (xy -5.08 -2.032) (xy -6.096 -2.032) (xy -6.096 -3.048)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") )
        (fp_poly (pts (xy -5.08 -0.508) (xy -5.08 0.508) (xy -6.096 0.508) (xy -6.096 -0.508)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") )
        (fp_poly (pts (xy -5.08 2.032) (xy -5.08 3.048) (xy -6.096 3.048) (xy -6.096 2.032)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") )
        (fp_poly (pts (xy -5.08 4.572) (xy -5.08 5.588) (xy -6.096 5.588) (xy -6.096 4.572)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") )
        (fp_poly (pts (xy -5.08 7.112) (xy -5.08 8.128) (xy -6.096 8.128) (xy -6.096 7.112)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") )
        (fp_poly (pts (xy -5.08 9.652) (xy -5.08 10.668) (xy -6.096 10.668) (xy -6.096 9.652)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") )
        (fp_poly (pts (xy 5.08 -12.192) (xy 5.08 -13.208) (xy 6.096 -13.208) (xy 6.096 -12.192)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") )
        (fp_poly (pts (xy 5.08 -9.652) (xy 5.08 -10.668) (xy 6.096 -10.668) (xy 6.096 -9.652)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") )
        (fp_poly (pts (xy 5.08 -7.112) (xy 5.08 -8.128) (xy 6.096 -8.128) (xy 6.096 -7.112)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") )
        (fp_poly (pts (xy 5.08 -4.572) (xy 5.08 -5.588) (xy 6.096 -5.588) (xy 6.096 -4.572)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") )
        (fp_poly (pts (xy 5.08 -2.032) (xy 5.08 -3.048) (xy 6.096 -3.048) (xy 6.096 -2.032)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") )
        (fp_poly (pts (xy 5.08 0.508) (xy 5.08 -0.508) (xy 6.096 -0.508) (xy 6.096 0.508)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") )
        (fp_poly (pts (xy 5.08 3.048) (xy 5.08 2.032) (xy 6.096 2.032) (xy 6.096 3.048)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") )
        (fp_poly (pts (xy 5.08 5.588) (xy 5.08 4.572) (xy 6.096 4.572) (xy 6.096 5.588)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") )
        (fp_poly (pts (xy 5.08 8.128) (xy 5.08 7.112) (xy 6.096 7.112) (xy 6.096 8.128)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") )
        (fp_poly (pts (xy 5.08 10.668) (xy 5.08 9.652) (xy 6.096 9.652) (xy 6.096 10.668)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") )
        (fp_poly (pts (xy 8.128 18.0292) (xy 7.112 18.0292) (xy 7.112 17.0132) (xy 8.128 17.0132)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") )
    `
    const front_courtyard = `
    `
    const front_paste = `
    `
    const pads = `
        (pad "" thru_hole circle (at -7.62 -12.7 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (zone_connect 0) )
        (pad "" thru_hole circle (at -7.62 -10.16 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) )
        (pad "" thru_hole circle (at -7.62 -7.62 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) )
        (pad "" thru_hole circle (at -7.62 -5.08 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) )
        (pad "" thru_hole circle (at -7.62 -2.54 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) )
        (pad "" thru_hole circle (at -7.62 0 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) )
        (pad "" thru_hole circle (at -7.62 2.54 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) )
        (pad "" thru_hole circle (at -7.62 5.08 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) )
        (pad "" thru_hole circle (at -7.62 7.62 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) )
        (pad "" thru_hole circle (at -7.62 10.16 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) )
        (pad "" thru_hole circle (at -7.62 12.7 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) )
        (pad "" thru_hole circle (at -7.62 15.24 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) )
        (pad "" thru_hole circle (at 7.62 -12.7 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (zone_connect 0) )
        (pad "" thru_hole circle (at 7.62 -10.16 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) )
        (pad "" thru_hole circle (at 7.62 -7.62 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) )
        (pad "" thru_hole circle (at 7.62 -5.08 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) )
        (pad "" thru_hole circle (at 7.62 -2.54 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) )
        (pad "" thru_hole circle (at 7.62 0 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) )
        (pad "" thru_hole circle (at 7.62 2.54 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) )
        (pad "" thru_hole circle (at 7.62 5.08 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) )
        (pad "" thru_hole circle (at 7.62 7.62 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) )
        (pad "" thru_hole circle (at 7.62 10.16 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) )
        (pad "" thru_hole circle (at 7.62 12.7 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) )
        (pad "" thru_hole circle (at 7.62 15.24 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) )
        (pad "GND" thru_hole circle (at -3.82 -10.16 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GND})
        (pad "GND" thru_hole circle (at 3.82 -7.62 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GND})
        (pad "GND" thru_hole circle (at 3.82 -5.08 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.GND})
        (pad "P00" thru_hole circle (at 3.82 -10.16 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P00})
        (pad "P01" thru_hole circle (at 3.82 -12.7 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P01})
        (pad "P02" thru_hole circle (at 3.82 -2.54 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P02})
        (pad "P03" thru_hole circle (at 3.82 0 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P03})
        (pad "P04" thru_hole circle (at 3.82 2.54 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P04})
        (pad "P05" thru_hole circle (at 3.82 5.08 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P05})
        (pad "P06" thru_hole circle (at 3.82 7.62 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P06})
        (pad "P07" thru_hole circle (at 3.82 10.16 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P07})
        (pad "P14" thru_hole circle (at -3.82 10.16 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P14})
        (pad "P15" thru_hole circle (at -3.82 7.62 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P15})
        (pad "P18" thru_hole circle (at -3.82 5.08 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P18})
        (pad "P19" thru_hole circle (at -3.82 2.54 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P19})
        (pad "P20" thru_hole circle (at -3.82 0 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P20})
        (pad "P21" thru_hole circle (at -3.82 -2.54 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.P21})
        (pad "RAW" thru_hole circle (at -3.82 -12.7 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.RAW})
        (pad "RST" thru_hole circle (at -3.82 -7.62 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.RST})
        (pad "VCC" thru_hole circle (at -3.82 -5.08 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no)  ${p.VCC})
    `
    const back_silkscreen = `
        (fp_line (start -7.62 15.07) (end -7.62 -15.01) (stroke (width 0.15) (type default)) (layer "B.SilkS") )
        (fp_line (start -6.12 -16.51) (end 6.12 -16.51) (stroke (width 0.15) (type default)) (layer "B.SilkS") )
        (fp_line (start 6.12 16.51) (end -6.12 16.51) (stroke (width 0.15) (type default)) (layer "B.SilkS") )
        (fp_line (start 7.62 -15.01) (end 7.62 15.07) (stroke (width 0.15) (type default)) (layer "B.SilkS") )
        (fp_arc (start -7.62 -15.01) (mid -7.18066 -16.07066) (end -6.12 -16.51) (stroke (width 0.15) (type default)) (layer "B.SilkS") )
        (fp_arc (start -6.12 16.51) (mid -7.18066 16.07066) (end -7.62 15.01) (stroke (width 0.15) (type default)) (layer "B.SilkS") )
        (fp_arc (start 6.12 -16.51) (mid 7.18066 -16.07066) (end 7.62 -15.01) (stroke (width 0.15) (type default)) (layer "B.SilkS") )
        (fp_arc (start 7.62 15.01) (mid 7.18066 16.07066) (end 6.12 16.51) (stroke (width 0.15) (type default)) (layer "B.SilkS") )
        (fp_text user "ROW3" (at 2.3335 10.2663 ${0 + p.rot}) (layer "B.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "COL5" (at -2.2707 10.2663 ${0 + p.rot}) (layer "B.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "LED" (at 2.6071 -12.6572 ${0 + p.rot}) (layer "B.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "COL4" (at -2.2707 7.6708 ${0 + p.rot}) (layer "B.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "COL2" (at -2.3207 2.5828 ${0 + p.rot}) (layer "B.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "ROW2" (at 2.3335 7.6708 ${0 + p.rot}) (layer "B.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "VCC" (at -2.5052 -5.0372 ${0 + p.rot}) (layer "B.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "RST" (at -2.5052 -7.5137 ${0 + p.rot}) (layer "B.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "COL1" (at -2.3707 0.0428 ${0 + p.rot}) (layer "B.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "SDA" (at 2.6461 -2.4972 ${0 + p.rot}) (layer "B.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "GND" (at -2.5052 -10.1172 ${0 + p.rot}) (layer "B.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "GND" (at 2.6461 -4.9737 ${0 + p.rot}) (layer "B.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "SCL" (at 2.6461 0.0428 ${0 + p.rot}) (layer "B.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "COL0" (at -2.3207 -2.4792 ${0 + p.rot}) (layer "B.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "RAW" (at -2.5052 -12.6572 ${0 + p.rot}) (layer "B.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "DATA" (at 2.3976 -10.1292 ${0 + p.rot}) (layer "B.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "ROW1" (at 2.2835 5.1228 ${0 + p.rot}) (layer "B.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "COL3" (at -2.2207 5.1708 ${0 + p.rot}) (layer "B.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "CS" (at 5.9944 15.3463 ${0 + p.rot}) (layer "B.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "ROW0" (at 2.3335 2.6208 ${0 + p.rot}) (layer "B.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "GND" (at 2.5826 -7.5137 ${0 + p.rot}) (layer "B.SilkS")  (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
    `
    const back_pads = `
        (pad "" smd custom (at -7.5946 16.7092 ${p.rot}) (size 0.25 1.5) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at -7.5946 17.2672 ${p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at -6.35 -12.7 ${90 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at -6.35 -10.16 ${90 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at -6.35 -7.62 ${90 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at -6.35 -5.08 ${90 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at -6.35 -2.54 ${90 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at -6.35 0 ${90 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at -6.35 2.54 ${90 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at -6.35 5.08 ${90 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at -6.35 7.62 ${90 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at -6.35 10.16 ${90 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at -5.842 -12.7 ${90 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at -5.842 -10.16 ${90 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at -5.842 -7.62 ${90 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at -5.842 -5.08 ${90 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at -5.842 -2.54 ${90 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at -5.842 0 ${90 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at -5.842 2.54 ${90 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at -5.842 5.08 ${90 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at -5.842 7.62 ${90 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at -5.842 10.16 ${90 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at 5.842 -12.7 ${270 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at 5.842 -10.16 ${270 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at 5.842 -7.62 ${270 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at 5.842 -5.08 ${270 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at 5.842 -2.54 ${270 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at 5.842 0 ${270 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at 5.842 2.54 ${270 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at 5.842 5.08 ${270 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at 5.842 7.62 ${270 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at 5.842 10.16 ${270 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "" smd custom (at 6.35 -12.7 ${270 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at 6.35 -10.16 ${270 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at 6.35 -7.62 ${270 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at 6.35 -5.08 ${270 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at 6.35 -2.54 ${270 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at 6.35 0 ${270 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at 6.35 2.54 ${270 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at 6.35 5.08 ${270 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at 6.35 7.62 ${270 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at 6.35 10.16 ${270 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at 7.62 16.7092 ${p.rot}) (size 0.25 1.5) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) )
        (pad "" smd custom (at 7.62 17.2672 ${p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) )
        (pad "GND" smd custom (at -4.826 -10.16 ${90 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.GND})
        (pad "GND" smd custom (at 4.826 -7.62 ${270 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.GND})
        (pad "GND" smd custom (at 4.826 -5.08 ${270 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.GND})
        (pad "P00" smd custom (at 4.826 -10.16 ${270 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.P00})
        (pad "P01" smd custom (at 4.826 -12.7 ${270 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.P01})
        (pad "P02" smd custom (at 4.826 -2.54 ${270 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.P02})
        (pad "P03" smd custom (at 4.826 0 ${270 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.P03})
        (pad "P04" smd custom (at 4.826 2.54 ${270 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.P04})
        (pad "P05" smd custom (at 4.826 5.08 ${270 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.P05})
        (pad "P06" smd custom (at 4.826 7.62 ${270 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.P06})
        (pad "P07" smd custom (at 4.826 10.16 ${270 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.P07})
        (pad "P09" smd custom (at 7.62 18.2832 ${p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.P09})
        (pad "P10" smd custom (at -7.5946 18.2832 ${p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.P10})
        (pad "P14" smd custom (at -4.826 10.16 ${90 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.P14})
        (pad "P15" smd custom (at -4.826 7.62 ${90 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.P15})
        (pad "P18" smd custom (at -4.826 5.08 ${90 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.P18})
        (pad "P19" smd custom (at -4.826 2.54 ${90 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.P19})
        (pad "P20" smd custom (at -4.826 0 ${90 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.P20})
        (pad "P21" smd custom (at -4.826 -2.54 ${90 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.P21})
        (pad "RAW" smd custom (at -4.826 -12.7 ${90 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.RAW})
        (pad "RST" smd custom (at -4.826 -7.62 ${90 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.RST})
        (pad "VCC" smd custom (at -4.826 -5.08 ${90 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes)))  ${p.VCC})
    `
    const back_fabrication = `
    `
    const back_mask = `
        (fp_poly (pts (xy -7.0866 18.0292) (xy -8.1026 18.0292) (xy -8.1026 17.0132) (xy -7.0866 17.0132)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") )
        (fp_poly (pts (xy -5.08 -13.208) (xy -5.08 -12.192) (xy -6.096 -12.192) (xy -6.096 -13.208)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") )
        (fp_poly (pts (xy -5.08 -10.668) (xy -5.08 -9.652) (xy -6.096 -9.652) (xy -6.096 -10.668)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") )
        (fp_poly (pts (xy -5.08 -8.128) (xy -5.08 -7.112) (xy -6.096 -7.112) (xy -6.096 -8.128)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") )
        (fp_poly (pts (xy -5.08 -5.588) (xy -5.08 -4.572) (xy -6.096 -4.572) (xy -6.096 -5.588)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") )
        (fp_poly (pts (xy -5.08 -3.048) (xy -5.08 -2.032) (xy -6.096 -2.032) (xy -6.096 -3.048)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") )
        (fp_poly (pts (xy -5.08 -0.508) (xy -5.08 0.508) (xy -6.096 0.508) (xy -6.096 -0.508)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") )
        (fp_poly (pts (xy -5.08 2.032) (xy -5.08 3.048) (xy -6.096 3.048) (xy -6.096 2.032)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") )
        (fp_poly (pts (xy -5.08 4.572) (xy -5.08 5.588) (xy -6.096 5.588) (xy -6.096 4.572)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") )
        (fp_poly (pts (xy -5.08 7.112) (xy -5.08 8.128) (xy -6.096 8.128) (xy -6.096 7.112)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") )
        (fp_poly (pts (xy -5.08 9.652) (xy -5.08 10.668) (xy -6.096 10.668) (xy -6.096 9.652)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") )
        (fp_poly (pts (xy 5.08 -12.192) (xy 5.08 -13.208) (xy 6.096 -13.208) (xy 6.096 -12.192)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") )
        (fp_poly (pts (xy 5.08 -9.652) (xy 5.08 -10.668) (xy 6.096 -10.668) (xy 6.096 -9.652)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") )
        (fp_poly (pts (xy 5.08 -7.112) (xy 5.08 -8.128) (xy 6.096 -8.128) (xy 6.096 -7.112)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") )
        (fp_poly (pts (xy 5.08 -4.572) (xy 5.08 -5.588) (xy 6.096 -5.588) (xy 6.096 -4.572)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") )
        (fp_poly (pts (xy 5.08 -2.032) (xy 5.08 -3.048) (xy 6.096 -3.048) (xy 6.096 -2.032)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") )
        (fp_poly (pts (xy 5.08 0.508) (xy 5.08 -0.508) (xy 6.096 -0.508) (xy 6.096 0.508)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") )
        (fp_poly (pts (xy 5.08 3.048) (xy 5.08 2.032) (xy 6.096 2.032) (xy 6.096 3.048)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") )
        (fp_poly (pts (xy 5.08 5.588) (xy 5.08 4.572) (xy 6.096 4.572) (xy 6.096 5.588)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") )
        (fp_poly (pts (xy 5.08 8.128) (xy 5.08 7.112) (xy 6.096 7.112) (xy 6.096 8.128)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") )
        (fp_poly (pts (xy 5.08 10.668) (xy 5.08 9.652) (xy 6.096 9.652) (xy 6.096 10.668)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") )
        (fp_poly (pts (xy 8.128 18.0292) (xy 7.112 18.0292) (xy 7.112 17.0132) (xy 8.128 17.0132)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") )
    `
    const back_courtyard = `
    `
    const back_paste = `
    `
    const edge_cuts = `
    `
    const user_drawing = `
    `
    const user_comments = `
        (fp_rect (start -8.89 -16.51) (end 8.89 16.51) (stroke (width 0.2) (type solid)) (fill none) (layer "Cmts.User") )
        (fp_rect (start 3.55 -18.03) (end -3.55 -12.93) (stroke (width 0.1) (type default)) (fill none) (layer "Cmts.User") )
    `
    const user_eco1 = `
    `
    const user_eco2 = `
    `
    const model = `
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/PinSocket_2.54mm_5mm_2x-12.step" (offset (xyz 0 12.7 0)) (scale (xyz 1 1 1)) (rotate (xyz -90 0 90)))
        (model "\${KIPRJMOD}/tb2086-kicad/packages3D/Nice_Nano_V2.step" (offset (xyz 0 0 5)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))
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
