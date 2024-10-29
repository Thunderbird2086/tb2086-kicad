module.exports = {
  params: {
    designator: 'MCU',    // change it accordingly
    side: 'F',          // delete if not needed
    reversible: false,  // delete if not needed
    P02: {type: 'net', value: 'P02'}, // undefined, // change to undefined as needed
    GND: {type: 'net', value: 'GND'}, // undefined, // change to undefined as needed
    P00: {type: 'net', value: 'P00'}, // undefined, // change to undefined as needed
    P14: {type: 'net', value: 'P14'}, // undefined, // change to undefined as needed
    P20: {type: 'net', value: 'P20'}, // undefined, // change to undefined as needed
    P10: {type: 'net', value: 'P10'}, // undefined, // change to undefined as needed
    RST: {type: 'net', value: 'RST'}, // undefined, // change to undefined as needed
    P15: {type: 'net', value: 'P15'}, // undefined, // change to undefined as needed
    P05: {type: 'net', value: 'P05'}, // undefined, // change to undefined as needed
    RAW: {type: 'net', value: 'RAW'}, // undefined, // change to undefined as needed
    P09: {type: 'net', value: 'P09'}, // undefined, // change to undefined as needed
    P03: {type: 'net', value: 'P03'}, // undefined, // change to undefined as needed
    VCC: {type: 'net', value: 'VCC'}, // undefined, // change to undefined as needed
    P06: {type: 'net', value: 'P06'}, // undefined, // change to undefined as needed
    P07: {type: 'net', value: 'P07'}, // undefined, // change to undefined as needed
    P19: {type: 'net', value: 'P19'}, // undefined, // change to undefined as needed
    P01: {type: 'net', value: 'P01'}, // undefined, // change to undefined as needed
    P18: {type: 'net', value: 'P18'}, // undefined, // change to undefined as needed
    P21: {type: 'net', value: 'P21'}, // undefined, // change to undefined as needed
    P04: {type: 'net', value: 'P04'}, // undefined, // change to undefined as needed
  },
  body: p => {
    const standard_opening = `(
         footprint "ProMicro-dn-rev-unrouted"
        (version 20240108)
        (generator "pcbnew")
        (generator_version "8.0")
        (layer "F.Cu")
        (descr "Solder-jumper reversible Pro Micro footprint (unrouted)")
        (tags "promicro ProMicro reversible solder jumper")
        (attr through_hole)
        ${p.at /* parametric position */}
    `
    const front_pads = `
        (pad "" smd custom (at -7.5946 16.7092 ${p.rot}) (size 0.25 1.5) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "a0805916-bc4d-4113-8249-c83c51c8905e"))
        (pad "" smd custom (at -7.5946 17.2672 ${p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "b041f555-828b-4907-868f-5b596a34ec9f"))
        (pad "" smd custom (at -6.35 -12.7 ${90 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "7b9eb876-dd34-4baf-9366-e571a8ec81fe"))
        (pad "" smd custom (at -6.35 -10.16 ${90 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "88241fe5-1da6-4edc-a9f3-cf59f12f4e97"))
        (pad "" smd custom (at -6.35 -7.62 ${90 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "7ca8c79f-03c9-446a-8380-553d021f9731"))
        (pad "" smd custom (at -6.35 -5.08 ${90 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "732f8806-64bf-47cc-95c9-b7e8472fe002"))
        (pad "" smd custom (at -6.35 -2.54 ${90 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "cf438c16-a01b-459e-8971-e2a8493bcb57"))
        (pad "" smd custom (at -6.35 0 ${90 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "e241b1a9-fe33-41b4-ab7d-8d65850059af"))
        (pad "" smd custom (at -6.35 2.54 ${90 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "c17b79bb-57d9-45af-b70b-2377ee603599"))
        (pad "" smd custom (at -6.35 5.08 ${90 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "5751b1c2-d04e-4dde-a4fa-730557fc908e"))
        (pad "" smd custom (at -6.35 7.62 ${90 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "1d283ea9-738f-42e5-9add-df6f42cad880"))
        (pad "" smd custom (at -6.35 10.16 ${90 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "972dee85-2cc9-4030-b432-3f577bc8f289"))
        (pad "" smd custom (at -5.842 -12.7 ${90 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "3890bce1-39f6-4bb5-966e-e344523386d0"))
        (pad "" smd custom (at -5.842 -10.16 ${90 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "4fe66cda-df73-43f7-b26c-2a70eaaaaa83"))
        (pad "" smd custom (at -5.842 -7.62 ${90 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "64740a1b-f54f-4efe-be9b-15b2917185e8"))
        (pad "" smd custom (at -5.842 -5.08 ${90 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "ea82f5de-844b-4b84-87ec-53bf32610523"))
        (pad "" smd custom (at -5.842 -2.54 ${90 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "4e353b17-ef0a-4cd7-8b60-ee1fc4a8bee8"))
        (pad "" smd custom (at -5.842 0 ${90 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "d5d762f2-77cf-4010-9371-ed2f57b53f98"))
        (pad "" smd custom (at -5.842 2.54 ${90 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "95fd3b1d-1f86-437a-9cf0-f5097a601704"))
        (pad "" smd custom (at -5.842 5.08 ${90 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "54687275-60e3-45c3-92cb-cbccccdb8377"))
        (pad "" smd custom (at -5.842 7.62 ${90 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "e0e0eaa1-6e49-461e-a739-0b25737b155a"))
        (pad "" smd custom (at -5.842 10.16 ${90 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "d9517239-55e5-4557-8de8-d4dbff6e12e5"))
        (pad "" smd custom (at 5.842 -12.7 ${270 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "95c8644e-c3b2-4597-a29d-1b991cf07d18"))
        (pad "" smd custom (at 5.842 -10.16 ${270 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "b47fb241-2e42-4b80-b14d-870ae3750b2d"))
        (pad "" smd custom (at 5.842 -7.62 ${270 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "bdb3a269-5df0-4cb8-85f2-a25eefbe276d"))
        (pad "" smd custom (at 5.842 -5.08 ${270 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "9ed77c1b-708e-496c-b344-f40a07fd9c9e"))
        (pad "" smd custom (at 5.842 -2.54 ${270 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "543a1b67-3485-4b46-90e2-aaa6d0eeecfe"))
        (pad "" smd custom (at 5.842 0 ${270 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "ce71045c-e6e1-4a5e-b8f0-88a5f9f24783"))
        (pad "" smd custom (at 5.842 2.54 ${270 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "b739b5da-3cb1-429f-b5ef-98184d3ec8f8"))
        (pad "" smd custom (at 5.842 5.08 ${270 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "c673511a-fe6d-42ca-86c7-f8a63b249874"))
        (pad "" smd custom (at 5.842 7.62 ${270 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "03dfed99-2340-4559-8fc4-2c2805ac4a62"))
        (pad "" smd custom (at 5.842 10.16 ${270 + p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "f06774f6-87ca-4af2-9c0b-513153709686"))
        (pad "" smd custom (at 6.35 -12.7 ${270 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "032e4483-c68f-46f4-b690-d0cedf2ebdf9"))
        (pad "" smd custom (at 6.35 -10.16 ${270 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "7a9836b6-61ba-4a55-aeeb-1a5cf40f1c36"))
        (pad "" smd custom (at 6.35 -7.62 ${270 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "5dd701cf-3a23-42a1-a6e1-e09e5043ff11"))
        (pad "" smd custom (at 6.35 -5.08 ${270 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "1802849e-8144-4773-9c50-7392a6cd2345"))
        (pad "" smd custom (at 6.35 -2.54 ${270 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "c53f3dc4-14f9-4d6b-87a1-40d34296a575"))
        (pad "" smd custom (at 6.35 0 ${270 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "573726bb-4f98-40f7-b276-eb274ba5fb08"))
        (pad "" smd custom (at 6.35 2.54 ${270 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "7b4fb021-08ed-4804-9581-c336197a82a2"))
        (pad "" smd custom (at 6.35 5.08 ${270 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "e995bd0e-b79b-477c-ab65-c46b48d9a505"))
        (pad "" smd custom (at 6.35 7.62 ${270 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "022238cc-9297-47c8-b0d6-03145ca36238"))
        (pad "" smd custom (at 6.35 10.16 ${270 + p.rot}) (size 0.25 1) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "edbd81b1-f558-4642-83df-5b993cd97a92"))
        (pad "" smd custom (at 7.62 16.7092 ${p.rot}) (size 0.25 1.5) (layers "F.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "3f66b71a-d7f1-4761-ba01-81c8e7c73bb0"))
        (pad "" smd custom (at 7.62 17.2672 ${p.rot}) (size 0.1 0.1) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "bcb9cb62-7ec5-4731-b3e9-fd31890400d0"))
        (pad "GND" smd custom (at -4.826 -7.62 ${90 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "dabd1459-a0a6-4fb0-b4e4-6aa517926da8") ${p.GND})
        (pad "GND" smd custom (at -4.826 -5.08 ${90 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "8947ee3d-024a-4cc2-8701-a3b74c34f711") ${p.GND})
        (pad "GND" smd custom (at 4.826 -10.16 ${270 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "e56a5048-02b2-4e90-95f6-b207dea9d7c3") ${p.GND})
        (pad "P00" smd custom (at -4.826 -10.16 ${90 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "572122f3-137e-41d7-9fd5-690fcd7cc28b") ${p.P00})
        (pad "P01" smd custom (at -4.826 -12.7 ${90 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "99265db8-b901-4ad0-98f2-f9a9ff4afaae") ${p.P01})
        (pad "P02" smd custom (at -4.826 -2.54 ${90 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "3323b3ef-0b54-42a0-bcc2-7260a794c8bf") ${p.P02})
        (pad "P03" smd custom (at -4.826 0 ${90 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "e07a8d71-2596-4ed1-94d9-0ffd10b6977f") ${p.P03})
        (pad "P04" smd custom (at -4.826 2.54 ${90 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "8060783c-2ff1-45dc-a5e0-5ef00f047836") ${p.P04})
        (pad "P05" smd custom (at -4.826 5.08 ${90 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "ed3ad1fd-12ad-4dd7-8d80-2eebc44e6955") ${p.P05})
        (pad "P06" smd custom (at -4.826 7.62 ${90 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "ad353787-ff36-4e76-ab27-78958d07b668") ${p.P06})
        (pad "P07" smd custom (at -4.826 10.16 ${90 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "e252552d-c574-4874-9f7b-b46c28ee2f5a") ${p.P07})
        (pad "P09" smd custom (at -7.5946 18.2832 ${p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "b2d718d1-796d-43fc-ae3d-ca860db5a078") ${p.P09})
        (pad "P10" smd custom (at 7.62 18.2832 ${p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "f7f96748-1bea-4cfb-842b-e93e1850fc41") ${p.P10})
        (pad "P14" smd custom (at 4.826 10.16 ${270 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "5dd024e5-c1a9-411a-b078-387838eb1301") ${p.P14})
        (pad "P15" smd custom (at 4.826 7.62 ${270 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "a9f63cb4-3ed0-4bc0-a36f-c5094345259c") ${p.P15})
        (pad "P18" smd custom (at 4.826 5.08 ${270 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "034ac3c2-774c-4d19-b873-cb0e52813eea") ${p.P18})
        (pad "P19" smd custom (at 4.826 2.54 ${270 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "6a93cd9a-963c-40cd-917a-dedd46369bd7") ${p.P19})
        (pad "P20" smd custom (at 4.826 0 ${270 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "e47d7e81-bfa0-4420-85a3-a89f51172966") ${p.P20})
        (pad "P21" smd custom (at 4.826 -2.54 ${270 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "374632d9-584f-42e1-a635-aca61e695897") ${p.P21})
        (pad "RAW" smd custom (at 4.826 -12.7 ${270 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "c19c054a-8944-46dd-8883-0c12fe1fbdf7") ${p.RAW})
        (pad "RST" smd custom (at 4.826 -7.62 ${270 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "169822ae-c1f4-4b35-8072-82eb1be36520") ${p.RST})
        (pad "VCC" smd custom (at 4.826 -5.08 ${270 + p.rot}) (size 1.2 0.5) (layers "F.Cu" "F.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "0ba6da00-d20a-4342-a5b4-b07fe2131a9d") ${p.VCC})
    `
    const front_silkscreen = `
        (property "Reference" "${p.ref}" (at 0.254 -14.986 ${0 + p.rot}) (layer "F.SilkS") (hide yes) (uuid "34a06afe-ac80-43f5-a944-ea31fce9061b") (effects (font (size 1 1) (thickness 0.15))))
        (fp_line (start -7.62 -15.01) (end -7.62 15.07) (stroke (width 0.15) (type default)) (layer "F.SilkS") (uuid "4f9141ed-5073-4600-8c0b-01dd7a739ab5"))
        (fp_line (start -6.12 16.51) (end 6.12 16.51) (stroke (width 0.15) (type default)) (layer "F.SilkS") (uuid "7fa80d8a-ac8f-4e9c-a1f7-36b6d5ab1bd5"))
        (fp_line (start 6.12 -16.51) (end -6.12 -16.51) (stroke (width 0.15) (type default)) (layer "F.SilkS") (uuid "1e9ed46f-c248-4393-b457-e8b49527b028"))
        (fp_line (start 7.62 15.07) (end 7.62 -15.01) (stroke (width 0.15) (type default)) (layer "F.SilkS") (uuid "ed8a8733-6bb1-4d2e-814b-8894afcf0c29"))
        (fp_arc (start -7.62 -15.01) (mid -7.18066 -16.07066) (end -6.12 -16.51) (stroke (width 0.15) (type default)) (layer "F.SilkS") (uuid "0b7ab274-4b97-4344-88d5-f319eef217b7"))
        (fp_arc (start -6.12 16.51) (mid -7.18066 16.07066) (end -7.62 15.01) (stroke (width 0.15) (type default)) (layer "F.SilkS") (uuid "08fa4a0e-7e07-4df4-abe8-ded5b19a63d9"))
        (fp_arc (start 6.12 -16.51) (mid 7.18066 -16.07066) (end 7.62 -15.01) (stroke (width 0.15) (type default)) (layer "F.SilkS") (uuid "9b500d6d-7881-4545-89d3-ff310b4cc10e"))
        (fp_arc (start 7.62 15.01) (mid 7.18066 16.07066) (end 6.12 16.51) (stroke (width 0.15) (type default)) (layer "F.SilkS") (uuid "8d225dc4-e136-4026-b0c0-4339139b7ccb"))
        (fp_text user "GND" (at -2.5389 -7.5445 ${0 + p.rot}) (layer "F.SilkS") (uuid "065c897d-bb11-4027-bb1e-381067d94acf") (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "SCL" (at -2.6024 0.012 ${0 + p.rot}) (layer "F.SilkS") (uuid "15c5e434-f070-46b6-bd14-8888e87d9062") (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "COL0" (at 2.3631 -2.51 ${0 + p.rot}) (layer "F.SilkS") (uuid "1c790445-ec0c-4c23-ab58-589a3d07e360") (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "ROW2" (at -2.3524 7.64 ${0 + p.rot}) (layer "F.SilkS") (uuid "237ab46a-3d58-41b7-a27f-b5af15b16654") (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "SDA" (at -2.6024 -2.528 ${0 + p.rot}) (layer "F.SilkS") (uuid "2d9536ee-e5dd-4c50-9f23-fcae33c471b9") (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "RST" (at 2.5476 -7.5445 ${0 + p.rot}) (layer "F.SilkS") (uuid "35b51789-f248-4159-9b68-e82fba08b8bf") (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "ROW3" (at -2.3524 10.2355 ${0 + p.rot}) (layer "F.SilkS") (uuid "4261472a-aae4-406b-954e-95de1ceb828f") (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "LED" (at -2.5634 -12.688 ${0 + p.rot}) (layer "F.SilkS") (uuid "4b9c140e-adc8-4bce-b292-4b9987391ec6") (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "DATA" (at -2.4524 -10.16 ${0 + p.rot}) (layer "F.SilkS") (uuid "643fe5e7-4bd2-445a-9be6-e754b942e901") (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "ROW1" (at -2.3024 5.092 ${0 + p.rot}) (layer "F.SilkS") (uuid "66d60cfc-3292-4c21-8d27-f4f97a85dae3") (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "GND" (at 2.5476 -10.148 ${0 + p.rot}) (layer "F.SilkS") (uuid "6e2180d3-f878-4232-8f74-b41ddb09eca5") (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "GND" (at -2.6024 -5.0045 ${0 + p.rot}) (layer "F.SilkS") (uuid "7562bd3b-d21e-4ec2-9d69-7f8f31bc1a94") (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "CS" (at -6.0198 15.3155 ${0 + p.rot}) (layer "F.SilkS") (uuid "81aaf9ce-a7c0-4515-afda-128143c65bbf") (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "COL1" (at 2.4131 0.012 ${0 + p.rot}) (layer "F.SilkS") (uuid "a7e3dc9e-7896-4d95-9a57-d8fb2c290718") (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "ROW0" (at -2.3524 2.59 ${0 + p.rot}) (layer "F.SilkS") (uuid "ab437c32-e6ef-4d34-8476-678349d10182") (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "COL2" (at 2.3631 2.552 ${0 + p.rot}) (layer "F.SilkS") (uuid "bc4f3c35-8439-41c9-aa39-e80651196159") (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "COL3" (at 2.2631 5.14 ${0 + p.rot}) (layer "F.SilkS") (uuid "bde1d53f-fa32-4499-89f0-c90ee77290a7") (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "RAW" (at 2.5476 -12.688 ${0 + p.rot}) (layer "F.SilkS") (uuid "c908cebc-5e0a-4fd8-8922-2c4ec0d1975c") (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "COL4" (at 2.3131 7.64 ${0 + p.rot}) (layer "F.SilkS") (uuid "ccdab5ce-6872-4b06-ac02-0f8c5f8f96d4") (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "COL5" (at 2.3131 10.2355 ${0 + p.rot}) (layer "F.SilkS") (uuid "e498addb-1ae9-4acf-8312-9ffc8f974041") (effects (font (size 0.75 0.5) (thickness 0.125))))
        (fp_text user "VCC" (at 2.5476 -5.068 ${0 + p.rot}) (layer "F.SilkS") (uuid "ea86affc-4f34-4095-9b68-a72b90996258") (effects (font (size 0.75 0.5) (thickness 0.125))))
    `
    const front_fabrication = `
        (property "Value" "ProMicro" (at 0 17.78 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "b77ff848-dbc7-4621-903e-39964b75cacd") (effects (font (size 1 1) (thickness 0.15))))
        (property "Footprint" "" (at -7.62 -12.7 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "6b52f627-141c-4367-9d91-a4aa2b95203b") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Datasheet" "" (at -7.62 -12.7 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "9ba51fa7-8180-4d8b-aeef-c63f0ad8b238") (effects (font (size 1.27 1.27) (thickness 0.15))))
        (property "Description" "" (at -7.62 -12.7 ${0 + p.rot}) (layer "F.Fab") (hide yes) (uuid "ee9a732d-f872-40da-bca8-561571e5fb0f") (effects (font (size 1.27 1.27) (thickness 0.15))))
    `
    const front_mask = `
        (fp_poly (pts (xy -7.0866 18.0292) (xy -8.1026 18.0292) (xy -8.1026 17.0132) (xy -7.0866 17.0132)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (uuid "1d1b946b-31c0-46fa-a5db-891da6e8d37f"))
        (fp_poly (pts (xy -5.08 -13.208) (xy -5.08 -12.192) (xy -6.096 -12.192) (xy -6.096 -13.208)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (uuid "d97641e1-4f6b-49ec-9e60-ed55867d90ce"))
        (fp_poly (pts (xy -5.08 -10.668) (xy -5.08 -9.652) (xy -6.096 -9.652) (xy -6.096 -10.668)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (uuid "19144c7f-18ee-4109-a1bc-4055c6a99dc5"))
        (fp_poly (pts (xy -5.08 -8.128) (xy -5.08 -7.112) (xy -6.096 -7.112) (xy -6.096 -8.128)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (uuid "64701c6c-4d3f-49a3-b69d-1b023c9663ea"))
        (fp_poly (pts (xy -5.08 -5.588) (xy -5.08 -4.572) (xy -6.096 -4.572) (xy -6.096 -5.588)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (uuid "2002f70c-f474-4626-a471-ad3a328eab3f"))
        (fp_poly (pts (xy -5.08 -3.048) (xy -5.08 -2.032) (xy -6.096 -2.032) (xy -6.096 -3.048)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (uuid "ebc8a471-6c5e-4fc5-a040-ebbe906a01cc"))
        (fp_poly (pts (xy -5.08 -0.508) (xy -5.08 0.508) (xy -6.096 0.508) (xy -6.096 -0.508)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (uuid "e9e368c3-78b5-4213-a9da-70d3d6492014"))
        (fp_poly (pts (xy -5.08 2.032) (xy -5.08 3.048) (xy -6.096 3.048) (xy -6.096 2.032)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (uuid "ef06a941-650c-4e47-8824-575f19d1b29c"))
        (fp_poly (pts (xy -5.08 4.572) (xy -5.08 5.588) (xy -6.096 5.588) (xy -6.096 4.572)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (uuid "65aa0d52-625d-44d8-b76c-3b34328111d6"))
        (fp_poly (pts (xy -5.08 7.112) (xy -5.08 8.128) (xy -6.096 8.128) (xy -6.096 7.112)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (uuid "fc7ade64-084f-4fec-811c-93b3d618a21a"))
        (fp_poly (pts (xy -5.08 9.652) (xy -5.08 10.668) (xy -6.096 10.668) (xy -6.096 9.652)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (uuid "8272f15d-3382-43aa-a9de-02463c3563ac"))
        (fp_poly (pts (xy 5.08 -12.192) (xy 5.08 -13.208) (xy 6.096 -13.208) (xy 6.096 -12.192)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (uuid "9cd8f3fa-e264-481a-af73-41a9eef51152"))
        (fp_poly (pts (xy 5.08 -9.652) (xy 5.08 -10.668) (xy 6.096 -10.668) (xy 6.096 -9.652)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (uuid "fedc616b-7582-4246-9d2c-19fd4de27d55"))
        (fp_poly (pts (xy 5.08 -7.112) (xy 5.08 -8.128) (xy 6.096 -8.128) (xy 6.096 -7.112)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (uuid "b41076c1-cbf5-4743-a9e8-340b4c5adc28"))
        (fp_poly (pts (xy 5.08 -4.572) (xy 5.08 -5.588) (xy 6.096 -5.588) (xy 6.096 -4.572)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (uuid "d95e3d6d-ff33-4fdb-ae4d-4e46b6816a1a"))
        (fp_poly (pts (xy 5.08 -2.032) (xy 5.08 -3.048) (xy 6.096 -3.048) (xy 6.096 -2.032)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (uuid "d90fb390-7822-4df4-b583-c75f14fb38b2"))
        (fp_poly (pts (xy 5.08 0.508) (xy 5.08 -0.508) (xy 6.096 -0.508) (xy 6.096 0.508)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (uuid "6511c71f-8be8-4328-a866-1ea804c849f9"))
        (fp_poly (pts (xy 5.08 3.048) (xy 5.08 2.032) (xy 6.096 2.032) (xy 6.096 3.048)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (uuid "7e6fa2f5-b20a-421c-a5ff-8647f769693c"))
        (fp_poly (pts (xy 5.08 5.588) (xy 5.08 4.572) (xy 6.096 4.572) (xy 6.096 5.588)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (uuid "220d6c4b-3887-493a-86a2-0eb42084eac8"))
        (fp_poly (pts (xy 5.08 8.128) (xy 5.08 7.112) (xy 6.096 7.112) (xy 6.096 8.128)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (uuid "24cbcc02-0e5e-43b6-b2a1-1afb8e97c17d"))
        (fp_poly (pts (xy 5.08 10.668) (xy 5.08 9.652) (xy 6.096 9.652) (xy 6.096 10.668)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (uuid "c8916179-6cc0-4718-83bf-3eb4e9e201d5"))
        (fp_poly (pts (xy 8.128 18.0292) (xy 7.112 18.0292) (xy 7.112 17.0132) (xy 8.128 17.0132)) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask") (uuid "ce69ed9d-73a7-430d-b051-9b597ffb46d5"))
    `
    const front_courtyard = `
    `
    const front_paste = `
    `
    const pads = `
        (pad "" thru_hole circle (at -7.62 -12.7 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (zone_connect 0) (uuid "568a21a2-f61b-4680-80d5-4b8d16c6d760"))
        (pad "" thru_hole circle (at -7.62 -10.16 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "630ed179-9e3f-43f1-8251-13bc32d2b792"))
        (pad "" thru_hole circle (at -7.62 -7.62 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "6e73a662-1cfe-4f76-8276-55eeb396f823"))
        (pad "" thru_hole circle (at -7.62 -5.08 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "df5072bc-eba5-42f5-8a7e-682719c831cf"))
        (pad "" thru_hole circle (at -7.62 -2.54 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "4df6cd6e-af52-4d60-a2e6-52872b3079b4"))
        (pad "" thru_hole circle (at -7.62 0 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "3b6c9cd4-731c-4a82-92b5-a3d566495b3b"))
        (pad "" thru_hole circle (at -7.62 2.54 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "5b15511b-aafc-4097-bfe3-3038ed191144"))
        (pad "" thru_hole circle (at -7.62 5.08 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "f5a41d57-1f1e-47b9-ae7a-790135682edd"))
        (pad "" thru_hole circle (at -7.62 7.62 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "271042b7-a607-4c3d-b1bd-e4cb21566fa1"))
        (pad "" thru_hole circle (at -7.62 10.16 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "42376d44-ac69-45e2-9781-2cdd5fdccd1a"))
        (pad "" thru_hole circle (at -7.62 12.7 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "723bae6a-ae3a-45ee-be30-f7126a997bad"))
        (pad "" thru_hole circle (at -7.62 15.24 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "81e31e05-78a2-4e81-9966-265f874fe230"))
        (pad "" thru_hole circle (at 7.62 -12.7 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (zone_connect 0) (uuid "704555f3-6abe-4366-9356-b249480ccf7d"))
        (pad "" thru_hole circle (at 7.62 -10.16 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "3a8b4968-c435-4d5e-ad4d-967fcae815f9"))
        (pad "" thru_hole circle (at 7.62 -7.62 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "d73d77c7-3f51-4c52-a6f8-5c7e9df354d0"))
        (pad "" thru_hole circle (at 7.62 -5.08 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "2f3ff4ee-a427-4932-94f9-4d0c0f09f2b7"))
        (pad "" thru_hole circle (at 7.62 -2.54 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "8e2d6327-d94f-440d-ad5b-95be3f8458dc"))
        (pad "" thru_hole circle (at 7.62 0 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "e38ca4f8-af52-4ff6-a664-90ba04b89900"))
        (pad "" thru_hole circle (at 7.62 2.54 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "57fe1cc5-03a5-4598-bca2-8a4a52f9731e"))
        (pad "" thru_hole circle (at 7.62 5.08 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "1ffd690b-9607-4118-bd7e-57f5f9a1144e"))
        (pad "" thru_hole circle (at 7.62 7.62 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "67a3ef45-78eb-4873-af55-83f1ec41b87c"))
        (pad "" thru_hole circle (at 7.62 10.16 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "47720be4-0ec1-4e50-b0ab-f568ef5b42ca"))
        (pad "" thru_hole circle (at 7.62 12.7 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "b5af5051-661e-46ef-8a22-6f46e5997b8b"))
        (pad "" thru_hole circle (at 7.62 15.24 ${270 + p.rot}) (size 1.8 1.8) (drill 1) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "34341eef-e789-43cb-b48a-8bb888503134"))
        (pad "GND" thru_hole circle (at -3.82 -7.62 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "e293d5dd-5dbc-4f6c-8a35-b4c6d70d8452") ${p.GND})
        (pad "GND" thru_hole circle (at -3.82 -5.08 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "1bf02ec7-5a4b-4877-a358-990bd409f0e4") ${p.GND})
        (pad "GND" thru_hole circle (at 3.82 -10.16 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "b1518efc-726f-4094-98ff-f5e2292473b4") ${p.GND})
        (pad "P00" thru_hole circle (at -3.82 -10.16 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "fb9e1633-febd-45f0-8046-2fa8143265d0") ${p.P00})
        (pad "P01" thru_hole circle (at -3.82 -12.7 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "e3be39ee-22c9-426a-a100-41655483b65b") ${p.P01})
        (pad "P02" thru_hole circle (at -3.82 -2.54 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "da61d065-9601-4187-8bd5-1c4bf0e19a29") ${p.P02})
        (pad "P03" thru_hole circle (at -3.82 0 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "0bff0cf8-0003-4830-9ae5-b34722861cc1") ${p.P03})
        (pad "P04" thru_hole circle (at -3.82 2.54 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "deaa97ba-a303-4e7a-95e3-2edbc7c6c68d") ${p.P04})
        (pad "P05" thru_hole circle (at -3.82 5.08 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "5deac9d2-738a-45f7-9f81-613c51c97aa4") ${p.P05})
        (pad "P06" thru_hole circle (at -3.82 7.62 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "4ead29c4-652e-4077-9e7a-e4b7956d5031") ${p.P06})
        (pad "P07" thru_hole circle (at -3.82 10.16 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "1aa4e6e9-0206-4044-aee7-f1b2c39c889b") ${p.P07})
        (pad "P14" thru_hole circle (at 3.82 10.16 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "3630c68b-fcdd-4a2d-a397-1ebbce87df27") ${p.P14})
        (pad "P15" thru_hole circle (at 3.82 7.62 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "f2ed981a-d3f3-42ba-8792-de1fb66b21d1") ${p.P15})
        (pad "P18" thru_hole circle (at 3.82 5.08 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "7ec26101-a505-4616-bd0e-72002402d86b") ${p.P18})
        (pad "P19" thru_hole circle (at 3.82 2.54 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "65632111-c5ec-4bb2-9029-ec7d6aabde8b") ${p.P19})
        (pad "P20" thru_hole circle (at 3.82 0 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "45f363e7-3239-458d-b7ab-6ba284bddf71") ${p.P20})
        (pad "P21" thru_hole circle (at 3.82 -2.54 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "6912da9c-b688-4b8d-bf33-f74c161bbad3") ${p.P21})
        (pad "RAW" thru_hole circle (at 3.82 -12.7 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "7c002540-d34b-40b9-8761-b6ee47cfae5d") ${p.RAW})
        (pad "RST" thru_hole circle (at 3.82 -7.62 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "69e7be47-ab15-4af0-bd5d-cc857d36e98a") ${p.RST})
        (pad "VCC" thru_hole circle (at 3.82 -5.08 ${p.rot}) (size 0.8 0.8) (drill 0.4) (layers "*.Cu" "*.Mask") (remove_unused_layers no) (uuid "2fc34bd8-b855-42a0-a6ec-c118d67d9217") ${p.VCC})
    `
    const back_pads = `
        (pad "" smd custom (at -7.5946 16.7092 ${p.rot}) (size 0.25 1.5) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "eed4f095-44d1-423e-a047-e39a7ca9b7e4"))
        (pad "" smd custom (at -7.5946 17.2672 ${p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "db947bac-197f-4a43-bafe-3a43424256d1"))
        (pad "" smd custom (at -6.35 -12.7 ${90 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "2f861206-bbea-40a6-abce-f9561e152dfd"))
        (pad "" smd custom (at -6.35 -10.16 ${90 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "c7fa86ba-a36f-4257-a42e-e362072e244a"))
        (pad "" smd custom (at -6.35 -7.62 ${90 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "5f913406-e68f-46a0-bc40-958254e3a84f"))
        (pad "" smd custom (at -6.35 -5.08 ${90 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "1d777297-9147-4856-afdb-d5cdf739cdb7"))
        (pad "" smd custom (at -6.35 -2.54 ${90 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "2b620d77-0f7c-4ef7-9301-88cdb36984b2"))
        (pad "" smd custom (at -6.35 0 ${90 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "65dd73d5-b57f-45be-ab35-36c708c093f8"))
        (pad "" smd custom (at -6.35 2.54 ${90 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "c4c42842-a7d2-454f-9022-24eae54f3960"))
        (pad "" smd custom (at -6.35 5.08 ${90 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "717cd2e2-524a-4e07-8a24-f3fab2c3a16e"))
        (pad "" smd custom (at -6.35 7.62 ${90 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "70d2e591-503b-46c8-af38-e270dc426af3"))
        (pad "" smd custom (at -6.35 10.16 ${90 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "fc012eba-79ba-4810-8da0-8430a8717174"))
        (pad "" smd custom (at -5.842 -12.7 ${90 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "c76dc169-3207-475b-8a7b-7f0e0994bd66"))
        (pad "" smd custom (at -5.842 -10.16 ${90 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "4041d3b5-0a95-4a5d-abcc-c93f758729c0"))
        (pad "" smd custom (at -5.842 -7.62 ${90 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "4d87be2f-5884-4fec-b5cc-74c5ed27a1df"))
        (pad "" smd custom (at -5.842 -5.08 ${90 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "c60c2802-ccef-45fd-baf5-5350034fa44c"))
        (pad "" smd custom (at -5.842 -2.54 ${90 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "9fd4cd55-58d9-446c-964f-b7c05f0c69a8"))
        (pad "" smd custom (at -5.842 0 ${90 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "44442492-18c0-47a6-a20c-181fc74bff45"))
        (pad "" smd custom (at -5.842 2.54 ${90 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "b95dd6b8-355a-400a-8f4e-9434e4796119"))
        (pad "" smd custom (at -5.842 5.08 ${90 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "392fd056-afa7-42c4-9f9b-1cc9aa6676a0"))
        (pad "" smd custom (at -5.842 7.62 ${90 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "cd2a90fe-2955-4481-bd80-24f28a8c308e"))
        (pad "" smd custom (at -5.842 10.16 ${90 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "a75f8885-bbae-4924-a24e-4b8d54166df7"))
        (pad "" smd custom (at 5.842 -12.7 ${270 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "e444470c-8462-43b5-aa59-0f52267ad4b6"))
        (pad "" smd custom (at 5.842 -10.16 ${270 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "4fb40b65-0909-4578-88a1-5db98f8199c0"))
        (pad "" smd custom (at 5.842 -7.62 ${270 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "0783e47c-5010-44de-b7fe-6780e97e84c4"))
        (pad "" smd custom (at 5.842 -5.08 ${270 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "3a588356-d8f8-40d0-b9b5-453c46d6b29f"))
        (pad "" smd custom (at 5.842 -2.54 ${270 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "83801fc0-a0b5-4494-8de0-6e0c9ec3aa7d"))
        (pad "" smd custom (at 5.842 0 ${270 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "3969b889-a5a3-4960-b8f5-34279a6669cd"))
        (pad "" smd custom (at 5.842 2.54 ${270 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "3e4c53da-7db7-48c8-a5d6-d6042fac2525"))
        (pad "" smd custom (at 5.842 5.08 ${270 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "0b6c5eba-6259-4034-93aa-536d5a2f3703"))
        (pad "" smd custom (at 5.842 7.62 ${270 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "11596c08-7f82-4c62-9e96-500809236b61"))
        (pad "" smd custom (at 5.842 10.16 ${270 + p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "e6218564-a000-4426-b477-4aa23a201797"))
        (pad "" smd custom (at 6.35 -12.7 ${270 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "c203bbf9-89c4-47ec-a7ab-df2ee3781ed1"))
        (pad "" smd custom (at 6.35 -10.16 ${270 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "93d62345-3ada-417c-8228-5e16e708341c"))
        (pad "" smd custom (at 6.35 -7.62 ${270 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "ed0d88b7-2a05-4e13-a40a-6d32350975a3"))
        (pad "" smd custom (at 6.35 -5.08 ${270 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "78527ca0-56b6-4609-9164-163760dee3bd"))
        (pad "" smd custom (at 6.35 -2.54 ${270 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "38314d8e-506f-4281-a11a-60f6a5f7fc76"))
        (pad "" smd custom (at 6.35 0 ${270 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "aaed5476-05ac-4807-8c20-76e8f36218ea"))
        (pad "" smd custom (at 6.35 2.54 ${270 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "ea4dca6f-af24-4963-bcb7-6d6491463704"))
        (pad "" smd custom (at 6.35 5.08 ${270 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "672caba0-28b0-4d19-b4c4-1b2af56f392b"))
        (pad "" smd custom (at 6.35 7.62 ${270 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "02bae722-8878-4b20-a321-417af4e60a44"))
        (pad "" smd custom (at 6.35 10.16 ${270 + p.rot}) (size 0.25 1) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "133ce81c-bfd9-414a-871e-8e9a0d88347e"))
        (pad "" smd custom (at 7.62 16.7092 ${p.rot}) (size 0.25 1.5) (layers "B.Cu") (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives ) (uuid "04286952-0942-4d05-995b-3f3a579837cb"))
        (pad "" smd custom (at 7.62 17.2672 ${p.rot}) (size 0.1 0.1) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0) (fill yes))) (uuid "92fce950-7102-4525-a328-3a387eb40cbf"))
        (pad "GND" smd custom (at -4.826 -10.16 ${90 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "c7d4831c-2b73-4d1c-841f-f349487670d8") ${p.GND})
        (pad "GND" smd custom (at 4.826 -7.62 ${270 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "eed24b95-7ca2-46ae-9fd6-67fd34423862") ${p.GND})
        (pad "GND" smd custom (at 4.826 -5.08 ${270 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "4cd05bbe-5dd5-4a30-80cd-dceb9566f0b8") ${p.GND})
        (pad "P00" smd custom (at 4.826 -10.16 ${270 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "8e9662e7-cb17-470a-b4ca-bba50d7adbb5") ${p.P00})
        (pad "P01" smd custom (at 4.826 -12.7 ${270 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "07d5c66f-0122-40aa-ace2-355c48c89b47") ${p.P01})
        (pad "P02" smd custom (at 4.826 -2.54 ${270 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "3e474116-12bd-430a-8426-5a0a34e52e23") ${p.P02})
        (pad "P03" smd custom (at 4.826 0 ${270 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "ddd4120f-87bf-49ff-94cb-e37ab8d5ae05") ${p.P03})
        (pad "P04" smd custom (at 4.826 2.54 ${270 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "693363aa-03fd-4e36-a087-752206551c73") ${p.P04})
        (pad "P05" smd custom (at 4.826 5.08 ${270 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "c89e785f-f0d4-469d-8caa-41999bcd7120") ${p.P05})
        (pad "P06" smd custom (at 4.826 7.62 ${270 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "30bb0435-e0d6-45e2-9c62-73ca1760b5df") ${p.P06})
        (pad "P07" smd custom (at 4.826 10.16 ${270 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "bb8ed1a8-8151-4803-b723-35fe11242380") ${p.P07})
        (pad "P09" smd custom (at 7.62 18.2832 ${p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "b204c93b-b61f-4c05-8eb4-8cffa3a77609") ${p.P09})
        (pad "P10" smd custom (at -7.5946 18.2832 ${p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "7060972d-8be1-4c70-825e-f0d40479c900") ${p.P10})
        (pad "P14" smd custom (at -4.826 10.16 ${90 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "72265cf6-6388-478a-ba97-33eedf56647b") ${p.P14})
        (pad "P15" smd custom (at -4.826 7.62 ${90 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "9aa9c503-4648-44c1-b60c-c95b2f3af931") ${p.P15})
        (pad "P18" smd custom (at -4.826 5.08 ${90 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "4a345a2d-99c4-4d70-94b9-d3e2074bf756") ${p.P18})
        (pad "P19" smd custom (at -4.826 2.54 ${90 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "1456088c-3d91-4941-8f0f-a468bd302616") ${p.P19})
        (pad "P20" smd custom (at -4.826 0 ${90 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "fb002f0e-baa6-4d3f-bd1e-c137068adfa8") ${p.P20})
        (pad "P21" smd custom (at -4.826 -2.54 ${90 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "2bc587f2-1f6c-41f0-b6b4-b1971e4b5574") ${p.P21})
        (pad "RAW" smd custom (at -4.826 -12.7 ${90 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "f9b9f4c1-50e8-44b0-9cbd-ec6e9e819992") ${p.RAW})
        (pad "RST" smd custom (at -4.826 -7.62 ${90 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "9143e2cc-da4f-4d8d-9988-1b0735b73f17") ${p.RST})
        (pad "VCC" smd custom (at -4.826 -5.08 ${90 + p.rot}) (size 1.2 0.5) (layers "B.Cu" "B.Mask") (clearance 0.1) (zone_connect 0) (thermal_bridge_angle 45) (options (clearance outline) (anchor rect)) (primitives (gr_poly (pts (xy -0.6 0) (xy 0.6 0) (xy 0.6 -1) (xy 0 -0.4) (xy -0.6 -1)) (width 0) (fill yes))) (uuid "7f9d63d9-a48a-4be4-aff6-5821dbec95ac") ${p.VCC})
    `
    const back_silkscreen = `
        (fp_line (start -7.62 15.07) (end -7.62 -15.01) (stroke (width 0.15) (type default)) (layer "B.SilkS") (uuid "30bef25a-e238-4337-b5a3-6194612f2976"))
        (fp_line (start -6.12 -16.51) (end 6.12 -16.51) (stroke (width 0.15) (type default)) (layer "B.SilkS") (uuid "b1d83c21-70bf-4aa4-b45c-671a1e71e80f"))
        (fp_line (start 6.12 16.51) (end -6.12 16.51) (stroke (width 0.15) (type default)) (layer "B.SilkS") (uuid "bb61b3bb-2c27-4c73-92e4-cc01ec26bcbb"))
        (fp_line (start 7.62 -15.01) (end 7.62 15.07) (stroke (width 0.15) (type default)) (layer "B.SilkS") (uuid "a60a797c-3266-4f72-bd41-8a07f50e853b"))
        (fp_arc (start -7.62 -15.01) (mid -7.18066 -16.07066) (end -6.12 -16.51) (stroke (width 0.15) (type default)) (layer "B.SilkS") (uuid "efdbf59a-063d-4c75-807b-330dcfa4feca"))
        (fp_arc (start -6.12 16.51) (mid -7.18066 16.07066) (end -7.62 15.01) (stroke (width 0.15) (type default)) (layer "B.SilkS") (uuid "87179383-bcf8-47f4-b5d8-134aacf2c569"))
        (fp_arc (start 6.12 -16.51) (mid 7.18066 -16.07066) (end 7.62 -15.01) (stroke (width 0.15) (type default)) (layer "B.SilkS") (uuid "8e0a4609-fb9d-468e-8848-137c392e4455"))
        (fp_arc (start 7.62 15.01) (mid 7.18066 16.07066) (end 6.12 16.51) (stroke (width 0.15) (type default)) (layer "B.SilkS") (uuid "6177c1da-f7f2-4396-bb41-81c64a7338b9"))
        (fp_text user "ROW3" (at 2.3335 10.2663 ${0 + p.rot}) (layer "B.SilkS") (uuid "02078df2-48af-4384-ba36-134331aa3939") (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "COL5" (at -2.2707 10.2663 ${0 + p.rot}) (layer "B.SilkS") (uuid "0e1d857a-4351-4063-98e6-620be95c4888") (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "LED" (at 2.6071 -12.6572 ${0 + p.rot}) (layer "B.SilkS") (uuid "4acf5d30-afe4-433f-82b9-3135b7407331") (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "COL4" (at -2.2707 7.6708 ${0 + p.rot}) (layer "B.SilkS") (uuid "4f4b7237-d4b9-41d6-9649-d6ff602a9962") (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "COL2" (at -2.3207 2.5828 ${0 + p.rot}) (layer "B.SilkS") (uuid "58376534-e792-44d1-b24a-c8640046276f") (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "ROW2" (at 2.3335 7.6708 ${0 + p.rot}) (layer "B.SilkS") (uuid "74e3171f-5826-456d-a357-b61973a5d3a2") (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "VCC" (at -2.5052 -5.0372 ${0 + p.rot}) (layer "B.SilkS") (uuid "756442f9-e5fc-4dc9-80b8-3c83c7e7c01c") (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "RST" (at -2.5052 -7.5137 ${0 + p.rot}) (layer "B.SilkS") (uuid "78828545-feac-4331-a205-a0803b4e931a") (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "COL1" (at -2.3707 0.0428 ${0 + p.rot}) (layer "B.SilkS") (uuid "84e77f05-c3e6-4aae-b72e-328507b5b8da") (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "SDA" (at 2.6461 -2.4972 ${0 + p.rot}) (layer "B.SilkS") (uuid "937c60da-6c06-494a-ae31-dcd6b4374d63") (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "GND" (at -2.5052 -10.1172 ${0 + p.rot}) (layer "B.SilkS") (uuid "a0f36ff4-9192-47a1-a39b-f63930191e13") (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "GND" (at 2.6461 -4.9737 ${0 + p.rot}) (layer "B.SilkS") (uuid "c523c18e-4bd5-4f72-a10c-c82e315746ff") (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "SCL" (at 2.6461 0.0428 ${0 + p.rot}) (layer "B.SilkS") (uuid "ceabead9-074d-4038-96cc-9076a26fcdf1") (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "COL0" (at -2.3207 -2.4792 ${0 + p.rot}) (layer "B.SilkS") (uuid "d99a5946-8d47-4702-9067-39731b9ae701") (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "RAW" (at -2.5052 -12.6572 ${0 + p.rot}) (layer "B.SilkS") (uuid "db198e5d-4f58-4096-ba37-95004fb8247d") (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "DATA" (at 2.3976 -10.1292 ${0 + p.rot}) (layer "B.SilkS") (uuid "e76fef21-15e6-4023-8fef-4302e4afc672") (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "ROW1" (at 2.2835 5.1228 ${0 + p.rot}) (layer "B.SilkS") (uuid "e86875c8-e41e-477c-91a0-467dbe49b914") (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "COL3" (at -2.2207 5.1708 ${0 + p.rot}) (layer "B.SilkS") (uuid "ed366cb6-5c1d-40d3-b875-d09dc657129b") (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "CS" (at 5.9944 15.3463 ${0 + p.rot}) (layer "B.SilkS") (uuid "efb9c519-1ed4-41b5-880c-fa9eb1eaf7df") (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "ROW0" (at 2.3335 2.6208 ${0 + p.rot}) (layer "B.SilkS") (uuid "fafcaf18-2e40-49f6-b8f7-69f219cfc645") (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
        (fp_text user "GND" (at 2.5826 -7.5137 ${0 + p.rot}) (layer "B.SilkS") (uuid "ffb408a9-fbe3-4e76-aa3d-72feda2497d4") (effects (font (size 0.75 0.5) (thickness 0.125)) (justify mirror)))
    `
    const back_fabrication = `
    `
    const back_mask = `
        (fp_poly (pts (xy -7.0866 18.0292) (xy -8.1026 18.0292) (xy -8.1026 17.0132) (xy -7.0866 17.0132)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (uuid "9c7c9c1c-b48b-447b-b93e-75f0b7ab6144"))
        (fp_poly (pts (xy -5.08 -13.208) (xy -5.08 -12.192) (xy -6.096 -12.192) (xy -6.096 -13.208)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (uuid "4d9caaad-55e1-4ff7-8e53-785ae90936cb"))
        (fp_poly (pts (xy -5.08 -10.668) (xy -5.08 -9.652) (xy -6.096 -9.652) (xy -6.096 -10.668)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (uuid "bc405122-499d-4370-aa06-27d33ab23fef"))
        (fp_poly (pts (xy -5.08 -8.128) (xy -5.08 -7.112) (xy -6.096 -7.112) (xy -6.096 -8.128)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (uuid "c542c2c4-d387-4ff8-a72f-c96f2389c463"))
        (fp_poly (pts (xy -5.08 -5.588) (xy -5.08 -4.572) (xy -6.096 -4.572) (xy -6.096 -5.588)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (uuid "4bb8953b-30eb-4706-a99f-954a99c9b12c"))
        (fp_poly (pts (xy -5.08 -3.048) (xy -5.08 -2.032) (xy -6.096 -2.032) (xy -6.096 -3.048)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (uuid "8c87fa3b-c255-4622-9c66-7a47a4dd0ac8"))
        (fp_poly (pts (xy -5.08 -0.508) (xy -5.08 0.508) (xy -6.096 0.508) (xy -6.096 -0.508)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (uuid "ca85a4fa-ce7b-457a-adf2-e4a2d69f09ad"))
        (fp_poly (pts (xy -5.08 2.032) (xy -5.08 3.048) (xy -6.096 3.048) (xy -6.096 2.032)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (uuid "ff21a493-5fef-487b-a0b0-f27909d2d1eb"))
        (fp_poly (pts (xy -5.08 4.572) (xy -5.08 5.588) (xy -6.096 5.588) (xy -6.096 4.572)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (uuid "7886e6d7-33a2-44f5-a958-79dfff2a3577"))
        (fp_poly (pts (xy -5.08 7.112) (xy -5.08 8.128) (xy -6.096 8.128) (xy -6.096 7.112)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (uuid "9dfe8127-a1ab-4800-9f88-b3eba8fd1af2"))
        (fp_poly (pts (xy -5.08 9.652) (xy -5.08 10.668) (xy -6.096 10.668) (xy -6.096 9.652)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (uuid "fbb6661e-e2ba-42f0-a6d3-b889f5347ae6"))
        (fp_poly (pts (xy 5.08 -12.192) (xy 5.08 -13.208) (xy 6.096 -13.208) (xy 6.096 -12.192)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (uuid "4db77000-80da-437c-9c2c-43200688ae50"))
        (fp_poly (pts (xy 5.08 -9.652) (xy 5.08 -10.668) (xy 6.096 -10.668) (xy 6.096 -9.652)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (uuid "a7901936-73f7-4243-a923-4b4a0afbe32e"))
        (fp_poly (pts (xy 5.08 -7.112) (xy 5.08 -8.128) (xy 6.096 -8.128) (xy 6.096 -7.112)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (uuid "7e723b79-38f1-4971-9dc4-de085317de72"))
        (fp_poly (pts (xy 5.08 -4.572) (xy 5.08 -5.588) (xy 6.096 -5.588) (xy 6.096 -4.572)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (uuid "fbee7789-afb8-4087-b90a-40cfbf0990a0"))
        (fp_poly (pts (xy 5.08 -2.032) (xy 5.08 -3.048) (xy 6.096 -3.048) (xy 6.096 -2.032)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (uuid "59aab844-63a2-42dd-b644-3f71d5437392"))
        (fp_poly (pts (xy 5.08 0.508) (xy 5.08 -0.508) (xy 6.096 -0.508) (xy 6.096 0.508)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (uuid "c2599c52-60c5-4707-b1cc-e9e33fdc70bb"))
        (fp_poly (pts (xy 5.08 3.048) (xy 5.08 2.032) (xy 6.096 2.032) (xy 6.096 3.048)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (uuid "2d8fbf8b-fa9a-458b-adca-e4469b316a2f"))
        (fp_poly (pts (xy 5.08 5.588) (xy 5.08 4.572) (xy 6.096 4.572) (xy 6.096 5.588)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (uuid "d61c3920-8baa-45ae-98e5-4fe31e0577ff"))
        (fp_poly (pts (xy 5.08 8.128) (xy 5.08 7.112) (xy 6.096 7.112) (xy 6.096 8.128)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (uuid "cb2e26e2-272b-4b7a-bb11-a236670012b9"))
        (fp_poly (pts (xy 5.08 10.668) (xy 5.08 9.652) (xy 6.096 9.652) (xy 6.096 10.668)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (uuid "43071155-2547-44fe-acad-8eef2990ee87"))
        (fp_poly (pts (xy 8.128 18.0292) (xy 7.112 18.0292) (xy 7.112 17.0132) (xy 8.128 17.0132)) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask") (uuid "5580ea08-63d6-45f2-afde-13c9ba3d73ec"))
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
        (fp_rect (start -8.89 -16.51) (end 8.89 16.51) (stroke (width 0.2) (type solid)) (fill none) (layer "Cmts.User") (uuid "983af04c-1fbc-40f4-b49f-0c71bb0f3c69"))
        (fp_rect (start 3.55 -18.03) (end -3.55 -12.93) (stroke (width 0.1) (type default)) (fill none) (layer "Cmts.User") (uuid "f8f1367a-ec62-452a-819a-2bfeef4b520d"))
    `
    const user_eco1 = `
    `
    const user_eco2 = `
    `
    const model = `
        (model "\${KIPRJMOD}/packages3D/PinSocket_2.54mm_5mm_2x-12.step" (offset (xyz 0 12.7 0)) (scale (xyz 1 1 1)) (rotate (xyz -90 0 90)))
        (model "\${KIPRJMOD}/packages3D/Nice_Nano_V2.step" (offset (xyz 0 0 5)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))
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
